import { Effect } from "effect";
import { getHttpResponseObjectWithHandle, HttpRequestLives, HttpRequestError } from "./httpRequest";
import { runPromiseWithLayer, LoggerService } from "./utils";

interface SessionData {
  loggedIn: boolean;
}

const processSessionData = (data: SessionData) => Effect.succeed(data.loggedIn);

const handleCheckSessionError = (e: HttpRequestError): Effect.Effect<boolean, never, LoggerService> =>
	Effect.gen(function*(_) {
		const logger = yield* _(LoggerService);
		yield* _(logger.error("Failed to check session: ", e));
		yield* _(logger.log("セッションチェック失敗。サインインページへリダイレクトします。"));
		return false;
	});

const checkSessionFlow = () =>
	getHttpResponseObjectWithHandle<SessionData, boolean>(
		"/api/check-session",
		{ credentials: "include" },
		processSessionData,
		handleCheckSessionError,
	);

const checkSession = async (): Promise<boolean> => {
	return await runPromiseWithLayer(checkSessionFlow(), HttpRequestLives);
};

const authenticated =
	(callback: () => Promise<void>) =>
		async (): Promise<void> => {
			if (await checkSession()) {
				await callback()
			} else {
				window.location.href = "/signin";
			}
        };

export default authenticated;
