import { Effect } from "effect";
import { runPromiseWithLayer } from "./utils";
import { postHttpRequestWithHandle, HttpRequestLives } from "./httpRequest";

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
	await runPromiseWithLayer(signoutFlow(), HttpRequestLives);
};

export default signout;
