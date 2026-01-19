import {
    SignInInput,
    SignInInputEncoded,
    SignUpInput,
    SignUpInputEncoded,
    UserId,
} from "@1day-todo/shared";
import { Effect, pipe, Schema } from "effect";

import { AuthService } from "./AuthService";

import { InvalidCredentialsError, InvalidSessionError } from "@/errors/types/features/AuthError";
import { InternalServerError, ValidationError } from "@/errors/types/features/DomainUtilError";
import { ApiService } from "@/shared/http/services/ApiService";

export const checkSessionUseCase = (): Effect.Effect<
    UserId,
    InvalidSessionError | InternalServerError,
    AuthService | ApiService
> =>
    pipe(
        AuthService.checkSession(),
        Effect.mapError((e) => e),
    );

export const signUpUseCase = (
    input: SignUpInputEncoded,
): Effect.Effect<void, ValidationError | InternalServerError, AuthService | ApiService> =>
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

export const signInUseCase = (
    input: SignInInputEncoded,
): Effect.Effect<
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
