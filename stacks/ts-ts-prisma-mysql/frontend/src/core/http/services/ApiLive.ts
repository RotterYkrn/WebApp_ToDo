import { Effect, Layer } from "effect";
import { ApiService } from "@/core/http";

export const ApiLive = Layer.succeed(ApiService, ApiService.of({
    get: (path: string, options?: RequestInit) => Effect.tryPromise({
        try: () => fetch(path, { ...options, method: "GET" }),
        catch: (e) => new Error(`Network error during fetch: ${path}\n${String(e)}`)
    }).pipe(handleResponse(`HTTP error during GET: ${path}\n`)),
    post: (path: string, options?: RequestInit) => Effect.tryPromise({
        try: () => fetch(path, { ...options, method: "POST" }),
        catch: (e) => new Error(`Network error during fetch: ${path}\n${String(e)}`)
    }).pipe(handleResponse(`HTTP error during POST: ${path}\n`)),
}));

export const handleResponse = (message: string) => <E>(res: Effect.Effect<Response, E>) =>
    res.pipe(
        Effect.flatMap((res) =>
            res.ok
                ? Effect.succeed(res)
                : Effect.fail(new Error(message + `${res.status}`))
        ),
    )
