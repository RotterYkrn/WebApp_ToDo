import { ParseSchemaError, ResponseJsonError } from "@/errors";
import { parseToSchema } from "@/shared/utils";
import { Effect, pipe, Schema } from "effect";
import { ApiService } from "./ApiService";

export const extractBodyWithSchema = <A, I>(
    schema: Schema.Schema<A, I>
): (res: Response) => Effect.Effect<A, ResponseJsonError | ParseSchemaError, ApiService> =>
    (res) => pipe(
        ApiService.extractBody(res),
        Effect.flatMap(parseToSchema(schema))
    );
