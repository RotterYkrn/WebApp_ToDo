import { ParseSchemaError } from "@/errors";
import { Either, Schema } from "effect";

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
