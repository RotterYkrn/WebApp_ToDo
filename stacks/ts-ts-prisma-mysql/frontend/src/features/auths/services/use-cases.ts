import { InvalidCredentialsError, SignInError, SignOutError, SignUpError, UnknownAuthError, ValidationError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { SignInInput, SignUpInput } from "@app/shared";
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
}): Effect.Effect<void, SignInError, AuthService | ApiService> =>
    pipe(
        input,
        parseToSchema(SignInInput),
        Effect.flatMap(AuthService.signInApi),
        Effect.mapError((e) => new SignInError({
            message: "Sign in failed",
            originalError: e,
        })),
    );

export const signInUseCase = (input: {
    email: string,
    password: string
}): Effect.Effect<void, string, AuthService | ApiService> =>
    pipe(
        input,
        parseToSchema(SignInInput),
        Effect.flatMap(AuthService.signInApi),
        Effect.mapError((e) => {
            // TODO: AuthErrorへのマッピングをsignInApi側で行う
            switch (e._tag) {
                case "UnauthorizedError":
                    return new InvalidCredentialsError({
                        message: "Invalid email or password",
                    })
                case "ParseSchemaError":
                    return new ValidationError({
                        message: "Validation error",
                        originalError: e,
                    });
                default:
                    return new UnknownAuthError({
                        message: "Unknown authentication error",
                        originalError: e,
                    });
            }
        }),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "InvalidCredentialsError":
                    return "メールアドレスまたはパスワードが正しくありません。";
                case "ValidationError":
                    return "メールアドレスとパスワードを正しく入力してください。";
                default:
                    return "予期せぬエラーが発生しました。時間をおいて再度お試しください。";
            }
        }),
    );

export const performSignOut = (): Effect.Effect<void, SignOutError, AuthService | ApiService> =>
    pipe(
        AuthService.signOutApi(),
        Effect.mapError((e) => new SignOutError({
            message: "Sign out failed",
            originalError: e,
        })),
    );
