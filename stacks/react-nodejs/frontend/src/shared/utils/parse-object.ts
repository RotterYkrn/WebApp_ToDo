import { ParseSchemaError } from "@/errors";
import { Effect, Either, Schema } from "effect";

export const parseResponseJson = <T>(): (res: Response) => Effect.Effect<T, ParseSchemaError> =>
    (res) =>
        Effect.tryPromise({
            try: () => res.json() as Promise<T>,
            catch: (e) =>
                new ParseSchemaError({
                    message: "Response JSON parsing failed.",
                    failedObject: res.json(),
                    originalError: e,
                }),
        });

export const parseToSchema = <A, I>(
    schema: Schema.Schema<A, I>,
): (obj: unknown) => Either.Either<A, ParseSchemaError> =>
    (obj) =>
        Either.try({
            try: () => Schema.decodeUnknownSync(schema)(obj),
            catch: (e) =>
                new ParseSchemaError({
                    message: "Value did not match the schema.",
                    failedObject: obj,
                    originalError: e,
                }),
        });
