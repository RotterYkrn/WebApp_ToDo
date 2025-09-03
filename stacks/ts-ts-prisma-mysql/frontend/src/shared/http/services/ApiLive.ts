import { NetworkError } from "@/errors";
import { Effect, Layer } from "effect";
import { PostOptionType } from "../types/api-types";
import { HttpStatus } from "../types/HttpStatus";
import { ApiService } from "./ApiService";
import { ensureHttpStatus, handleHttpError } from "./helper";

export const ApiLive = Layer.succeed(ApiService, ApiService.of({
    get: (path: string, expectedStatus: HttpStatus, options?: RequestInit) => Effect.tryPromise({
        try: () => fetch(path, { ...options, method: "GET" }),
        catch: (e) => new NetworkError({
            path,
            message: "Network error during GET",
            originalError: e
        })
    }).pipe(
        Effect.flatMap(handleHttpError(path, "HTTP error during GET")),
        Effect.flatMap(ensureHttpStatus(expectedStatus, "GET", path))
    ),
    post: (path: string, expectedStatus: HttpStatus, options?: PostOptionType) => Effect.tryPromise({
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
    }).pipe(
        Effect.flatMap(handleHttpError(path, "HTTP error during POST")),
        Effect.flatMap(ensureHttpStatus(expectedStatus, "POST", path))
    ),
}));
