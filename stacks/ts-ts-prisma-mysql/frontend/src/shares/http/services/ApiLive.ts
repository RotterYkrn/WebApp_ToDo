import { Effect, Layer } from "effect";
import { ApiService } from "@/shares/http";
import { NetworkError } from "@/errors";
import { classifyHttpError } from "../helpers/classifyHttpError";

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
    Effect.flatMap((res: Response) =>
        res.ok
            ? Effect.succeed(res)
            : Effect.fail(classifyHttpError(res, {
                path,
                message,
                responseBody: res.body,
            }))
    );
