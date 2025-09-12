import { SignInError, SignOutError, SignUpError } from "@/errors";
import { ApiService } from "@/shared/http";
import { UIService } from "@/shared/ui";
import { parseToSchema } from "@/shared/utils";
import { PagePath, SignInInput, SignUpInput, UserId } from "@app/shared";
import { Effect, pipe } from "effect";
import { AuthService } from "./AuthService";

export const performSignUp = (input: {
    email: string,
    password: string
}): Effect.Effect<void, SignUpError, AuthService | ApiService> =>
    pipe(
        input,
        parseToSchema(SignUpInput),
        Effect.flatMap(AuthService.signUpApi),
        Effect.tap(() => {
            UIService.redirectTo(PagePath.SIGN_IN);
        }),
        Effect.mapError((e) => new SignUpError({
            message: "Sign up failed",
            originalError: e,
        })),
    );

export const performSignIn = (input: {
    email: string,
    password: string
}): Effect.Effect<UserId, SignInError, AuthService | ApiService | UIService> =>
    pipe(
        input,
        parseToSchema(SignInInput),
        Effect.flatMap(AuthService.signInApi),
        Effect.tap(() => UIService.redirectTo(PagePath.INDEX)),
        Effect.mapError((e) => new SignInError({
            message: "Sign in failed",
            originalError: e,
        })),
    );

export const performSignOut = (): Effect.Effect<void, SignOutError, AuthService | ApiService | UIService> =>
    pipe(
        AuthService.signOutApi(),
        Effect.tap(() => UIService.redirectTo(PagePath.SIGN_IN)),
        Effect.mapError((e) => new SignOutError({
            message: "Sign out failed",
            originalError: e,
        })),
    );
