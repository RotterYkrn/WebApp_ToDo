import { ApiAuthPathFull, SignInInput, SignUpInput, UserId } from "@1day-todo/shared";
import { Effect, Layer, pipe } from "effect";

import { AuthService } from "./AuthService";

import { InvalidCredentialsError, InvalidSessionError } from "@/errors/types/features/AuthError";
import { InternalServerError } from "@/errors/types/features/DomainUtilError";
import { ApiService } from "@/shared/http/services/ApiService";
import { extractBodyWithSchema } from "@/shared/http/services/use-case";
import { HttpStatus } from "@/shared/http/types/HttpStatus";

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
