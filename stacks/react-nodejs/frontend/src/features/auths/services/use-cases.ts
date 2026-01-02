import { InvalidCredentialsError, SignOutError, Unauthorized, UnknownAuthError, ValidationError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { SignInInput, SignUpInput, UserId } from "@1day-todo/shared";
import { Effect, pipe } from "effect";
import { AuthService } from "./AuthService";

export const checkSessionUseCase = (): Effect.Effect<
    UserId,
    Unauthorized | UnknownAuthError,
    AuthService | ApiService
> =>
    pipe(
        AuthService.checkSession(),
        Effect.mapError((e) => {
            if (e._tag === "UnauthorizedError") {
                return new Unauthorized({
                    message: "User is not authenticated.",
                });
            } else {
                return new UnknownAuthError({
                    message: "An unexpected error occurred.",
                    originalError: e,
                });
            }
        }),
    );

export const signUpUseCase = (input: {
    email: string,
    password: string
}): Effect.Effect<
    void,
    ValidationError | UnknownAuthError,
    AuthService | ApiService
> =>
    pipe(
        input,
        parseToSchema(SignUpInput),
        Effect.flatMap(AuthService.signUpApi),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "BadRequestError":
                case "ParseSchemaError":
                    return new ValidationError({
                        message: "Bad email or password format.",
                        originalError: e,
                    });
                default:
                    return new UnknownAuthError({
                        message: "An unexpected error occurred.",
                        originalError: e,
                    });
            }
        }),
    );

export const signInUseCase = (input: {
    email: string,
    password: string
}): Effect.Effect<
    void,
    InvalidCredentialsError | ValidationError | UnknownAuthError,
    AuthService | ApiService
> =>
    pipe(
        input,
        parseToSchema(SignInInput),
        Effect.flatMap(AuthService.signInApi),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "UnauthorizedError":
                    return new InvalidCredentialsError({
                        message: "Invalid email or password.",
                    });
                case "BadRequestError":
                case "ParseSchemaError":
                    return new ValidationError({
                        message: "Bad email or password format.",
                        originalError: e,
                    });
                default:
                    return new UnknownAuthError({
                        message: "An unexpected error occurred.",
                        originalError: e,
                    });
            }
        }),
        // Effect.mapError((e) => {
        //     switch (e.type) {
        //         case "invalid_credentials":
        //             return "メールアドレスまたはパスワードが正しくありません。";
        //         case "validation_error":
        //             return "メールアドレスとパスワードを正しく入力してください。";
        //         default:
        //             return "予期せぬエラーが発生しました。時間をおいて再度お試しください。";
        //     }
        // }),
    );

export const signOutUseCase = (): Effect.Effect<void, SignOutError, AuthService | ApiService> =>
    pipe(
        AuthService.signOutApi(),
        Effect.mapError((e) => new SignOutError({
            message: "Sign out failed",
            originalError: e,
        })),
    );
