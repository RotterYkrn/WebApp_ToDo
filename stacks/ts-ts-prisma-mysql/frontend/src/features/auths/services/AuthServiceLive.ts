import { Effect, Layer, pipe } from "effect";
import { ApiService, parseResponseJson } from "@/core/http";
import { AuthService } from "./AuthService";
import { SessionData } from "../types/SessionData";

export const processSessionData = (data: SessionData) => Effect.succeed(data.loggedIn);

export const AuthServiceLive = Layer.succeed(AuthService, AuthService.of({
    checkSession: pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.get("/api/check-session", { credentials: "include" });
        }),
        parseResponseJson<SessionData>(),
        Effect.flatMap(processSessionData),
        Effect.mapError((e) => e),
    ),
    redirectToSignIn: Effect.sync(() => {
        window.location.href = "/signin";
        return Effect.never;
    }),
}));
