import { SignoutError } from "@/errors";
import { ApiService, HttpStatus, parseResponseJson } from "@/shared/http";
import { ApiAuthPathFull, PagePath } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { SessionData } from "../types/SessionData";
import { AuthService } from "./AuthService";

export const processSessionData = (data: SessionData) => Effect.succeed(data.loggedIn);

export const AuthLive = Layer.succeed(AuthService, AuthService.of({
    checkSession: () => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.get(ApiAuthPathFull.CHECK_SESSION, { credentials: "include" });
        }),
        parseResponseJson<SessionData>(),
        Effect.flatMap(processSessionData),
        Effect.mapError((e) => e),
    ),

    signOutApi: () => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.post(ApiAuthPathFull.SIGN_OUT, {
                options: { credentials: "include" }
            });
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
