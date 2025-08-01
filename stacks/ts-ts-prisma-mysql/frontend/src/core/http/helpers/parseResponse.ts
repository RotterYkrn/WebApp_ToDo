import { Effect, pipe } from "effect";
import { ParseJsonError } from "@/core/errors";

export const parseResponseJson = <T>() =>
    <E, R>(resEffect: Effect.Effect<Response, E, R>): Effect.Effect<T, E | ParseJsonError, R> =>
        pipe(
            resEffect,
            Effect.flatMap((res) => Effect.tryPromise({
                try: () => res.json() as Promise<T>,
                catch: (e) => new ParseJsonError({
                    message: "Response JSON parsing failed",
                    responseJson: res.json(),
                    originalError: e,
                })
            })),
        );
