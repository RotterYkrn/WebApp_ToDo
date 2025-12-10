import { NetworkError, ResponseJsonError } from "@/errors";
import { Effect, Layer, pipe } from "effect";
import { PostOptionType } from "../types/api-types";
import { HttpStatus } from "../types/HttpStatus";
import { ApiService } from "./ApiService";
import { ensureHttpStatus, handleHttpError } from "./helper";

const getApiUrl = (path: string): string => {
    const baseUrl = import.meta.env.VITE_API_URL || "";
    return `${baseUrl}${path}`;
}

export const ApiLive = Layer.succeed(ApiService, ApiService.of({
    get: (path: string, expectedStatus: HttpStatus, options?: RequestInit) => pipe(
        Effect.tryPromise({
            try: () => fetch(getApiUrl(path), { ...options, method: "GET" }),
            catch: (e) => new NetworkError({
                path,
                message: "Network error during GET",
                originalError: e
            })
        }),
        Effect.flatMap(handleHttpError(path, "HTTP error during GET")),
        Effect.flatMap(ensureHttpStatus(expectedStatus, "GET", path)),
        Effect.tapError((error) => Effect.sync(() => {
            console.error(`Error during GET ${getApiUrl(path)}:`, error);
        }))
    ),

    post: (path: string, expectedStatus: HttpStatus, options?: PostOptionType) => pipe(
        Effect.tryPromise({
            try: () => fetch(
                getApiUrl(path),
                {
                    ...options?.options,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(options?.body)
                }
            ),
            catch: (e) => new NetworkError({
                path,
                message: "Network error during POST",
                originalError: e
            })
        }),
        Effect.flatMap(handleHttpError(path, "HTTP error during POST")),
        Effect.flatMap(ensureHttpStatus(expectedStatus, "POST", path)),
        Effect.tapError((error) => Effect.sync(() => {
            console.error(`Error during POST ${getApiUrl(path)}:`, error);
        }))
    ),

    extractBody: (res) => Effect.tryPromise({
        try: () => res.json() as Promise<unknown>,
        catch: (e) => new ResponseJsonError({
            message: 'Failed to read response body as JSON.',
            originalError: e,
        }),
    }),
}));
