import { Effect, Layer, pipe } from "effect";
import { ApiService, HttpStatus, parseResponseJson } from "@/shares/http";
import { AuthService } from "./AuthService";
import { SessionData } from "../types/SessionData";
import { SignoutError } from "@/errors";

export const processSessionData = (data: SessionData) => Effect.succeed(data.loggedIn);

export const AuthServiceLive = Layer.succeed(AuthService, AuthService.of({
    checkSession: () => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.get("/api/check-session", { credentials: "include" });
        }),
        parseResponseJson<SessionData>(),
        Effect.flatMap(processSessionData),
        Effect.mapError((e) => e),
    ),

    signout: () => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.post("/api/signout", { credentials: "include" });
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
        window.location.href = "/signin";
        return Effect.void;
    }),
}));
