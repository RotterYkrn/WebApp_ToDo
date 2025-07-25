import { Effect, Layer } from "effect";
import { runPromiseWithLayer } from "../../../shares/utils";
import { getHttpResponseObjectWithHandle } from "@/shares/http/use-cases";
import { LoggerService } from "@/shares/logger/services";
import { ConsoleLoggerLive } from "@/shares/logger/layers";
import { HttpLive } from "@/shares/http/layers";
import { NetworkError } from "@/shares/errors";
import { SessionData } from "@/features/auths/domain/SessionData";

export const processSessionData = (data: SessionData) => Effect.succeed(data.loggedIn);

export const handleCheckSessionError = (e: NetworkError): Effect.Effect<boolean, never, LoggerService> =>
	Effect.gen(function*(_) {
		const logger = yield* _(LoggerService);
		yield* _(logger.error("Failed to check session: ", e));
		yield* _(logger.log("セッションチェック失敗。サインインページへリダイレクトします。"));
		return false;
	});

export const checkSessionFlow = () =>
	getHttpResponseObjectWithHandle<SessionData, boolean>(
		"/api/check-session",
		{ credentials: "include" },
		processSessionData,
		handleCheckSessionError,
	);

export const checkSession = async (): Promise<boolean> => {
	return await runPromiseWithLayer(checkSessionFlow(), Layer.mergeAll(HttpLive, ConsoleLoggerLive));
};

export const authenticated =
	(callback: () => Promise<void>) =>
		async (): Promise<void> => {
			if (await checkSession()) {
				await callback()
			} else {
				window.location.href = "/signin";
			}
        };
