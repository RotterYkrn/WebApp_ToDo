import { Effect } from "effect";
import { getHttpResponseObjectWithHandle, HttpRequestLives } from "./httpRequest";
import { runPromiseWithLayer } from "./utils";

interface SessionData {
  loggedIn: boolean;
}

const checkSessionFlow = () =>
	getHttpResponseObjectWithHandle<SessionData, boolean>(
		"/api/check-session",
		{
			credentials: "include",
		},
		(data) => Effect.succeed(data.loggedIn),
		(e) => {
			console.error("通信エラー", e);
			return Effect.succeed(false);
		}
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
