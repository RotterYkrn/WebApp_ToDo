import { SignInError, SignOutError, SignUpError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { SignInInput, SignUpInput, UserId } from "@app/shared";
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
        Effect.mapError((e) => new SignUpError({
            message: "Sign up failed",
            originalError: e,
        })),
    );

export const performSignIn = (input: {
    email: string,
    password: string
}): Effect.Effect<UserId, SignInError, AuthService | ApiService> =>
    pipe(
        input,
        parseToSchema(SignInInput),
        Effect.flatMap(AuthService.signInApi),
        Effect.mapError((e) => new SignInError({
            message: "Sign in failed",
            originalError: e,
        })),
    );

export const performSignOut = (): Effect.Effect<void, SignOutError, AuthService | ApiService> =>
    pipe(
        AuthService.signOutApi(),
        Effect.mapError((e) => new SignOutError({
            message: "Sign out failed",
            originalError: e,
        })),
    );
