import { SignInError, SignOutError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { EmailAddress, Password, UserId } from "@app/shared";
import { Effect, pipe } from "effect/index";
import { AuthService } from "./AuthService";

export const performSignIn = (
    email: string,
    password: string
): Effect.Effect<UserId, SignInError, AuthService | ApiService> =>
    pipe(
        Effect.gen(function* () {
            const validEmail = yield* parseToSchema(EmailAddress)(email);
            const validPassword = yield* parseToSchema(Password)(password);

            const authService = yield* AuthService;
            return yield* authService.signInApi(validEmail, validPassword);
        }),
        Effect.tap(() => {
            window.location.href = "/";
        }),
        Effect.mapError((e) => new SignInError({
            message: "Sign in failed",
            originalError: e,
        })),
    );

export const performSignOut = (): Effect.Effect<void, SignOutError, AuthService | ApiService> =>
    pipe(
        Effect.gen(function* () {
            const authService = yield* AuthService;
            yield* authService.signOutApi();
            yield* authService.redirectToSignIn();
        }),
        Effect.mapError((e) => new SignOutError({
            message: "Sign out failed",
            originalError: e,
        })),
    );
