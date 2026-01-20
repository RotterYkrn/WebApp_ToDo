import { SignInInput, SignInInputEncoded } from "@1day-todo/shared";
import { Effect, ParseResult, pipe, Schema } from "effect";

import { SessionService } from "../sessions/SessionService.js";
import { SessionInfo } from "../sessions/types.js";

import { AuthService } from "./AuthService.js";

import { InvalidCredentialsError } from "@/errors/AuthErrors.js";

export const signUpUseCase = (
    credentials: SignInInputEncoded,
): Effect.Effect<void, ParseResult.ParseError, AuthService> =>
    pipe(credentials, Schema.decodeEither(SignInInput), Effect.flatMap(AuthService.register));

export const signInUseCase = (
    credentials: SignInInputEncoded,
): Effect.Effect<
    SessionInfo,
    ParseResult.ParseError | InvalidCredentialsError,
    AuthService | SessionService
> =>
    pipe(
        credentials,
        Schema.decodeEither(SignInInput),
        Effect.flatMap(AuthService.verifyCredentials),
        Effect.flatMap(SessionService.create),
    );
