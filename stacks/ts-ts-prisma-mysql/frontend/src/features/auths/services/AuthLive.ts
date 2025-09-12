import { ApiService, HttpStatus } from "@/shared/http";
import { parseResponseJson, parseToSchema } from "@/shared/utils";
import { ApiAuthPathFull, SignInInput, SignUpInput, UserId } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { SessionData } from "../types/SessionData";
import { AuthService } from "./AuthService";

export const processSessionData = (data: SessionData) => Effect.succeed(data.loggedIn);

export const AuthLive = Layer.succeed(AuthService, AuthService.of({
    checkSession: () => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.get(ApiAuthPathFull.CHECK_SESSION, HttpStatus.OK, { credentials: "include" });
        }),
        parseResponseJson<SessionData>(),
        Effect.flatMap(processSessionData),
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
            HttpStatus.OK,
            {
                body: input,
                options: { credentials: "include" }
            }
        ),
        Effect.flatMap(ApiService.extractBody),
        Effect.flatMap(parseToSchema(UserId)),
    ),

    signOutApi: () => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.post(
                ApiAuthPathFull.SIGN_OUT,
                HttpStatus.NO_CONTENT,
                {
                    options: { credentials: "include" }
                }
            );
        }),
    ),
}));
