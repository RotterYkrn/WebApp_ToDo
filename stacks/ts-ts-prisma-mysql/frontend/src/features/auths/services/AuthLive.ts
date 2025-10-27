import { SignInError } from "@/errors";
import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";
import { ApiAuthPathFull, SignInInput, SignUpInput, UserId } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { SessionData } from "../types/SessionData";
import { AuthService } from "./AuthService";

export const processSessionData = (data: SessionData) => data.loggedIn;

export const AuthLive = Layer.succeed(AuthService, AuthService.of({
    checkSession: () => pipe(
        ApiService.get(
            ApiAuthPathFull.CHECK_SESSION,
            HttpStatus.OK,
            { credentials: "include" }
        ),
        Effect.flatMap(extractBodyWithSchema(UserId)),
        Effect.mapError((e) => e),
    ),

    signUpApi: (input: SignUpInput) => 
        ApiService.post(
            ApiAuthPathFull.SIGN_UP,
            HttpStatus.CREATED,
            { body: input, }
        ),

    signInApi: (input: SignInInput) => pipe(
        ApiService.post(
            ApiAuthPathFull.SIGN_IN,
            HttpStatus.NO_CONTENT,
            {
                body: input,
                options: { credentials: "include" }
            }
        ),
        Effect.map(() => void 0),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "UnauthorizedError":
                    return new SignInError({
                        type: "invalid_credentials",
                        inputObject: input,
                        originalError: e,
                    });
                case "BadRequestError":
                    return new SignInError({
                        type: "validation_error",
                        inputObject: input,
                        originalError: e,
                    });
                default:
                    return new SignInError({
                        type: "unknown_error",
                        inputObject: input,
                        originalError: e,
                    });
            }
        }),
    ),

    signOutApi: () => pipe(
        ApiService.post(
            ApiAuthPathFull.SIGN_OUT,
            HttpStatus.NO_CONTENT,
            {
                options: { credentials: "include" }
            }
        ),
        Effect.map(() => void 0),
    ),
}));
