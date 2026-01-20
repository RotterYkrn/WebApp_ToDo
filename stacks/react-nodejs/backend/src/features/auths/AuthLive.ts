import { SignInInput, SignUpInput, UserId } from "@1day-todo/shared";
import { Effect, Layer, pipe, Schema } from "effect";

import { AuthService } from "./AuthService.js";

import { InvalidCredentialsError } from "@/errors/AuthErrors.js";

export const AuthLive = Layer.succeed(
    AuthService,
    AuthService.of({
        register: (credentials) =>
            pipe(
                credentials,
                Schema.encodeEither(SignUpInput),
                Effect.flatMap(() => Effect.succeed(void 0)),
            ),

        verifyCredentials: (credentials) =>
            pipe(
                credentials,
                Schema.encodeEither(SignInInput),
                Effect.flatMap((credentials) => {
                    if (credentials.email === "a@a" && credentials.password === "a") {
                        return Effect.succeed(1);
                    } else {
                        return Effect.fail(
                            new InvalidCredentialsError({ message: "Invalid credentials" }),
                        );
                    }
                }),
                Effect.flatMap(Schema.decodeEither(UserId)),
            ),
    }),
);
