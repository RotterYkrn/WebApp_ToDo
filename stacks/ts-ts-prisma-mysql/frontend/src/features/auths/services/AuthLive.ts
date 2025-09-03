import { SignInError, SignOutError } from "@/errors";
import { ApiService, extractJsonBody, HttpStatus } from "@/shared/http";
import { parseResponseJson, parseToSchema } from "@/shared/utils";
import { ApiAuthPathFull, EmailAddress, PagePath, Password, UserId } from "@app/shared";
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

    signInApi: (email: EmailAddress, password: Password) => pipe(
        ApiService.post(
            ApiAuthPathFull.SIGN_IN,
            HttpStatus.OK,
            {
                body: { email, password },
                options: { credentials: "include" }
            }
        ),
        Effect.flatMap(extractJsonBody()),
        Effect.flatMap(parseToSchema(UserId)),
        Effect.mapError((e) => new SignInError({
            message: "Sign in failed",
            originalError: e,
        })),
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
        Effect.mapError((e) => new SignOutError({
            message: "Sign out failed",
            originalError: e,
        })),
    ),

    redirectToSignIn: () => Effect.sync(() => {
        window.location.href = PagePath.SIGN_IN;
        return Effect.void;
    }),
}));
