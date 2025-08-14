import { Effect, Layer, pipe } from "effect";
import { ApiService, HttpStatus, parseResponseJson } from "@/shared/http";
import { AuthService } from "./AuthService";
import { SessionData } from "../types/SessionData";
import { SignoutError } from "@/errors";
import { AuthPath, PagePath } from "@app/shared/app-paths";

export const processSessionData = (data: SessionData) => Effect.succeed(data.loggedIn);

export const AuthServiceLive = Layer.succeed(AuthService, AuthService.of({
    checkSession: () => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.get(AuthPath.CHECK_SESSION, { credentials: "include" });
        }),
        parseResponseJson<SessionData>(),
        Effect.flatMap(processSessionData),
        Effect.mapError((e) => e),
    ),

    signOutApi: () => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.post(AuthPath.SIGN_OUT, { credentials: "include" });
        }),
        Effect.flatMap((res) => 
            res.status === HttpStatus.NO_CONTENT
                ? Effect.void
                : Effect.fail(new SignoutError({
                    message: "Sign out failed",
                    status: res.status
                }))
        ),
    ),

    redirectToSignIn: () => Effect.sync(() => {
        window.location.href = PagePath.SIGN_IN;
        return Effect.void;
    }),
}));
