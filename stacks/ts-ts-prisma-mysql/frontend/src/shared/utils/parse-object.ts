import { AppError, ParseSchemaError } from "@/errors";
import { Effect, pipe, Schema } from "effect";

export const parseResponseJson = <T>() =>
    <E, R>(resEffect: Effect.Effect<Response, E, R>): Effect.Effect<T, E | ParseSchemaError, R> =>
        pipe(
            resEffect,
            Effect.flatMap((res) => Effect.tryPromise({
                try: () => res.json() as Promise<T>,
                catch: (e) => new ParseSchemaError({
                    message: "Response JSON parsing failed",
                    failedObject: res.json(),
                    originalError: e,
                })
            })),
        );

export const parseObjectToSchema = <A, I>(schema: Schema.Schema<A, I>) =>
    <R>(objEffect: Effect.Effect<unknown, AppError, R>): Effect.Effect<A, AppError, R> =>
        Effect.flatMap(objEffect, (obj) => Effect.try({
            try: () => Schema.decodeUnknownSync(schema)(obj),
            catch: (e) => new ParseSchemaError({
                message: 'Response JSON did not match the schema.',
                failedObject: obj,
                originalError: e,
            }),
        }));
