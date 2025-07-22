import { Effect, Layer } from "effect";
import { runPromiseWithLayer, postHttpRequestWithHandle } from "./utils";
import { FetchLive, ConsoleLoggerLive } from "./layers";

const signoutFlow = () =>
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

const signout = async (): Promise<void> => {
	await runPromiseWithLayer(signoutFlow(), Layer.mergeAll(FetchLive, ConsoleLoggerLive));
};

export default signout;
