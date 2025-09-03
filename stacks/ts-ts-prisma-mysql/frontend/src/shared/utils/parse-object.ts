import { AppError, ParseSchemaError } from "@/errors";
import { Effect, Schema } from "effect";

export const parseResponseJson = <T>(): <R>(
    self: Effect.Effect<Response, AppError, R>
) => Effect.Effect<T, AppError, R> =>
    Effect.flatMap((res) => Effect.tryPromise({
        try: () => res.json() as Promise<T>,
        catch: (e) => new ParseSchemaError({
            message: "Response JSON parsing failed.",
            failedObject: res.json(),
            originalError: e,
        })
    }));

export const parseToSchema = <A, I>(
    schema: Schema.Schema<A, I>
): (obj: unknown) => Effect.Effect<A, ParseSchemaError> =>
    (obj) => Effect.try({
        try: () => Schema.decodeUnknownSync(schema)(obj),
        catch: (e) => new ParseSchemaError({
            message: 'Value did not match the schema.',
            failedObject: obj,
            originalError: e,
        }),
    });
