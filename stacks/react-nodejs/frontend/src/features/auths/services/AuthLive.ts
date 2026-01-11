import { ApiAuthPathFull, SignInInput, SignUpInput, UserId } from "@1day-todo/shared";
import { Effect, Layer, pipe } from "effect";

import { AuthService } from "./AuthService";

import { InternalServerError, InvalidCredentialsError, InvalidSessionError } from "@/errors";
import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";

export const AuthLive = Layer.succeed(
    AuthService,
    AuthService.of({
        checkSession: () =>
            pipe(
                ApiService.get(ApiAuthPathFull.CHECK_SESSION, HttpStatus.OK),
                Effect.flatMap(extractBodyWithSchema(UserId)),
                Effect.mapError((e) => {
                    switch (e._tag) {
                        case "HttpUnauthorizedError":
                            return new InvalidSessionError({
                                message: "Invalid session",
                            });
                        default:
                            return new InternalServerError({
                                message: "Failed to check session",
                                cause: e,
                            });
                    }
                }),
            ),

        signUpApi: (input: SignUpInput) =>
            pipe(
                ApiService.post(ApiAuthPathFull.SIGN_UP, HttpStatus.CREATED, { body: input }),
                Effect.map(() => void 0),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to sign up",
                            cause: e,
                        }),
                ),
            ),

        signInApi: (input: SignInInput) =>
            pipe(
                ApiService.post(ApiAuthPathFull.SIGN_IN, HttpStatus.NO_CONTENT, { body: input }),
                Effect.map(() => void 0),
                Effect.mapError((e) => {
                    switch (e._tag) {
                        case "HttpUnauthorizedError":
                            return new InvalidCredentialsError({
                                message: "Invalid credentials",
                            });
                        default:
                            return new InternalServerError({
                                message: "Failed to check session",
                                cause: e,
                            });
                    }
                }),
            ),

        signOutApi: () =>
            pipe(
                ApiService.post(ApiAuthPathFull.SIGN_OUT, HttpStatus.NO_CONTENT),
                Effect.map(() => void 0),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to sign out",
                            cause: e,
                        }),
                ),
            ),
    }),
);
