import { NetworkError, ResponseJsonError } from "@/errors";
import { Effect, Layer, pipe } from "effect";
import { PostOptionType } from "../types/api-types";
import { HttpStatus } from "../types/HttpStatus";
import { ApiService } from "./ApiService";
import { ensureHttpStatus, handleHttpError } from "./helper";

export const ApiLive = Layer.succeed(ApiService, ApiService.of({
    get: (path: string, expectedStatus: HttpStatus, options?: RequestInit) => pipe(
        Effect.tryPromise({
            try: () => fetch(path, { ...options, method: "GET" }),
            catch: (e) => new NetworkError({
                path,
                message: "Network error during GET",
                originalError: e
            })
        }),
        Effect.flatMap(handleHttpError(path, "HTTP error during GET")),
        Effect.flatMap(ensureHttpStatus(expectedStatus, "GET", path))
    ),

    post: (path: string, expectedStatus: HttpStatus, options?: PostOptionType) => pipe(
        Effect.tryPromise({
            try: () => fetch(path, {
                ...options?.options,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(options?.body)
            }),
            catch: (e) => new NetworkError({
                path,
                message: "Network error during POST",
                originalError: e
            })
        }),
        Effect.flatMap(handleHttpError(path, "HTTP error during POST")),
        Effect.flatMap(ensureHttpStatus(expectedStatus, "POST", path))
    ),
    extractBody: (res) => Effect.tryPromise({
        try: () => res.json() as Promise<unknown>,
        catch: (e) => new ResponseJsonError({
            message: 'Failed to read response body as JSON.',
            originalError: e,
        }),
    }),
}));
