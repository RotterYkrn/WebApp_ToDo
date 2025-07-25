import { Effect, Layer } from "effect";
import { HttpLive } from "@/shares/http/layers";
import { ConsoleLoggerLive } from "@/shares/logger/layers";
import { postHttpRequestWithHandle } from "@/shares/http/use-cases";
import { runPromiseWithLayer } from "@/shares/utils";

export const signoutFlow = () =>
	postHttpRequestWithHandle(
		"/api/signout",
		{
			credentials: "include",
		},
		() => {
			window.location.href = "/signin";
			return Effect.succeed(undefined);
		},
		(e) => {
			console.error("通信エラー", e);
			return Effect.succeed(undefined);
		}
	);

export const signout = async (): Promise<void> => {
	await runPromiseWithLayer(signoutFlow(), Layer.mergeAll(HttpLive, ConsoleLoggerLive));
};
