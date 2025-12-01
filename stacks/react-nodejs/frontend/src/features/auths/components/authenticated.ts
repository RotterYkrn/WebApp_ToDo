import { UIService } from "@/shared/ui";
import { PagePath } from "@1day-todo/shared";
import { Effect } from "effect";
import { AuthService } from "../services/AuthService";

export const authenticated = <A, E, R>(callback: Effect.Effect<A, E, R>) =>
	Effect.gen(function* () {
		const authService = yield* AuthService;
		const isAuth = yield* authService.checkSession();

		if (isAuth) {
			return yield* callback;
		} else {
			return yield* UIService.redirectTo(PagePath.SIGN_IN);
		}
	});
