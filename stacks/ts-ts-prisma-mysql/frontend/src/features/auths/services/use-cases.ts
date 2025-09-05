import { SignInError, SignOutError, SignUpError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { PagePath, SignInInput, SignUpInput, UserId } from "@app/shared";
import { Effect, pipe } from "effect/index";
import { AuthService } from "./AuthService";

export const performSignUp = (
    email: string,
    password: string
): Effect.Effect<void, SignUpError, AuthService | ApiService> =>
    pipe(
        Effect.succeed({ email, password }),
        Effect.flatMap(parseToSchema(SignUpInput)),
        Effect.flatMap(AuthService.signUpApi),
        Effect.tap(() => {
            window.location.href = PagePath.SIGN_IN;
        }),
        Effect.mapError((e) => new SignUpError({
            message: "Sign up failed",
            originalError: e,
        })),
    );

export const performSignIn = (
    email: string,
    password: string
): Effect.Effect<UserId, SignInError, AuthService | ApiService> =>
    pipe(
        Effect.succeed({ email, password }),
        Effect.flatMap(parseToSchema(SignInInput)),
        Effect.flatMap(AuthService.signInApi),
        Effect.tap(() => Effect.sync(() => {
            window.location.href = PagePath.INDEX;
        })),
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
