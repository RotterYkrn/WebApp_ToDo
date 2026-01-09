import { Effect, pipe, Schema } from "effect";

import { ApiService } from "./ApiService";

import { ParseSchemaError, ResponseJsonError } from "@/errors";
import { parseToSchema } from "@/shared/utils";

export const extractBodyWithSchema =
    <A, I>(
        schema: Schema.Schema<A, I>,
    ): ((res: Response) => Effect.Effect<A, ResponseJsonError | ParseSchemaError, ApiService>) =>
    (res) =>
        pipe(ApiService.extractBody(res), Effect.flatMap(parseToSchema(schema)));
