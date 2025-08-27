import { AppError, ResponseJsonError } from "@/errors";
import { Effect } from "effect";

export const extractJsonBody = () => <R>(
    resEffect: Effect.Effect<Response, AppError, R>
): Effect.Effect<unknown, AppError, R> =>
    Effect.flatMap(resEffect, (res) => Effect.tryPromise({
        try: () => res.json() as Promise<unknown>,
        catch: (e) => new ResponseJsonError({
            message: 'Failed to read response body as JSON.',
            originalError: e,
        }),
    }));
