import { Effect, pipe } from "effect/index";
import { AuthService } from "./AuthService";
import { AppError } from "@/errors";
import { ApiService } from "@/shared/http";

export const performSignOut = (): Effect.Effect<void, AppError, AuthService | ApiService> =>
    pipe(
        Effect.gen(function* () {
            const authService = yield* AuthService;
            yield* authService.signOutApi();
            yield* authService.redirectToSignIn();
        }),
        Effect.mapError((e) => e),
    );
