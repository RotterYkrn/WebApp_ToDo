import { Effect } from "effect";
import { AuthService } from "../services/AuthService";

export const authenticated = <A, E, R>(callback: Effect.Effect<A, E, R>) =>
	Effect.gen(function* () {
		const authService = yield* AuthService;
		const isAuth = yield* authService.checkSession();

		if (isAuth) {
			return yield* callback;
		} else {
			return yield* authService.redirectToSignIn();
		}
	});
