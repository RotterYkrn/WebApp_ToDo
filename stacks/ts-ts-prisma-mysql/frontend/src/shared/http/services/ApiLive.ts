import { AppError, NetworkError, UnknownHttpError } from "@/errors";
import { Effect, Layer } from "effect";
import { classifyHttpError } from "../helpers/classifyHttpError";
import { PostOptionType } from "../types/api-types";
import { HttpStatus } from "../types/HttpStatus";
import { ApiService } from "./ApiService";

export const ApiLive = Layer.succeed(ApiService, ApiService.of({
    get: (path: string, expectedStatus: HttpStatus, options?: RequestInit) => Effect.tryPromise({
        try: () => fetch(path, { ...options, method: "GET" }),
        catch: (e) => new NetworkError({
            path,
            message: "Network error during GET",
            originalError: e
        })
    }).pipe(
        handleHttpError(path, "HTTP error during GET"),
        ensureHttpStatus(expectedStatus, "GET", path)
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
        handleHttpError(path, "HTTP error during POST"),
        ensureHttpStatus(expectedStatus, "POST", path)
    ),
}));

export const handleHttpError = (
    path: string,
    message: string
): <R>(
    self: Effect.Effect<Response, AppError, R>
) => Effect.Effect<Response, AppError, R> =>
    Effect.flatMap((res: Response) =>
        res.ok
            ? Effect.succeed(res)
            : Effect.fail(classifyHttpError(res, {
                path,
                message,
                responseBody: res.body,
            }))
    );

export const ensureHttpStatus = (expectedStatus: HttpStatus, method: "GET" | "POST", path: string): <R>(
    self: Effect.Effect<Response, AppError, R>
) => Effect.Effect<Response, AppError, R> =>
    Effect.flatMap((res) =>
        res.status === expectedStatus
            ? Effect.succeed(res)
            : Effect.fail(new UnknownHttpError({
                message: `${method}: Unexpected status (expected ${expectedStatus})`,
                path,
                status: res.status,
            }))
    );
