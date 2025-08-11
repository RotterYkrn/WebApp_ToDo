import { Effect, pipe } from "effect";
import { AuthService } from "../services/AuthService";

export const signout = () => pipe(
	Effect.gen(function* () {
		const authService = yield* AuthService;
		yield* authService.signout();
		yield* authService.redirectToSignIn();
	}),
	Effect.mapError((e) => e),
);
