import { Effect, Layer } from "effect";
import { ApiService } from "@/core/http";
import { HttpError, NetworkError } from "@/core/errors";

export const ApiLive = Layer.succeed(ApiService, ApiService.of({
    get: (path: string, options?: RequestInit) => Effect.tryPromise({
        try: () => fetch(path, { ...options, method: "GET" }),
        catch: (e) => new NetworkError({
            path,
            message: "Network error during GET",
            originalError: e
        })
    }).pipe(handleResponse(path, "HTTP error during GET")),
    post: (path: string, options?: RequestInit) => Effect.tryPromise({
        try: () => fetch(path, { ...options, method: "POST" }),
        catch: (e) => new NetworkError({
            path,
            message: "Network error during POST",
            originalError: e
        })
    }).pipe(handleResponse(path, "HTTP error during POST")),
}));

export const handleResponse = (path: string, message: string) =>
    <E, R>(res: Effect.Effect<Response, E, R>): Effect.Effect<Response, E | HttpError, R> =>
        res.pipe(
            Effect.flatMap((res) =>
                res.ok
                    ? Effect.succeed(res)
                    : Effect.fail(new HttpError({
                        path,
                        status: res.status,
                        message,
                        responseBody: res.body
                    }))
            ),
        );
