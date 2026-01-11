import { SignInInput, SignUpInput, UserId } from "@1day-todo/shared";
import { Effect, pipe, Schema } from "effect";

import { AuthService } from "./AuthService";

import {
    InternalServerError,
    InvalidCredentialsError,
    InvalidSessionError,
    ValidationError,
} from "@/errors";
import { ApiService } from "@/shared/http";

export const checkSessionUseCase = (): Effect.Effect<
    UserId,
    InvalidSessionError | InternalServerError,
    AuthService | ApiService
> =>
    pipe(
        AuthService.checkSession(),
        Effect.mapError((e) => e),
    );

export const signUpUseCase = (input: {
    email: string;
    password: string;
}): Effect.Effect<void, ValidationError | InternalServerError, AuthService | ApiService> =>
    pipe(
        input,
        Schema.decodeUnknownEither(SignUpInput),
        Effect.flatMap(AuthService.signUpApi),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "ParseError":
                    return new ValidationError({
                        message: "Bad email or password format.",
                        originalError: e,
                    });
                default:
                    return e;
            }
        }),
    );

export const signInUseCase = (input: {
    email: string;
    password: string;
}): Effect.Effect<
    void,
    InvalidCredentialsError | ValidationError | InternalServerError,
    AuthService | ApiService
> =>
    pipe(
        input,
        Schema.decodeUnknownEither(SignInInput),
        Effect.flatMap(AuthService.signInApi),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "ParseError":
                    return new ValidationError({
                        message: "Bad email or password format.",
                        originalError: e,
                    });
                default:
                    return e;
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

export const signOutUseCase = (): Effect.Effect<
    void,
    InternalServerError,
    AuthService | ApiService
> =>
    pipe(
        AuthService.signOutApi(),
        Effect.mapError((e) => e),
    );
