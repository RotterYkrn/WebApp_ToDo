import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";
import { ApiAuthPathFull, SignInInput, SignUpInput, UserId } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { AuthService } from "./AuthService";

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

    signUpApi: (input: SignUpInput) => pipe(
        ApiService.post(
            ApiAuthPathFull.SIGN_UP,
            HttpStatus.CREATED,
            { body: input, }
        ),
        Effect.map(() => void 0),
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
