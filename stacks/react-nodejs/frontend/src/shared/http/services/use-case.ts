import { Effect, pipe, Schema } from "effect";
import { ParseError } from "effect/ParseResult";

import { ApiService } from "./ApiService";

import { ResponseJsonError } from "@/errors";

export const extractBodyWithSchema =
    <A, I>(
        schema: Schema.Schema<A, I>,
    ): ((res: Response) => Effect.Effect<A, ResponseJsonError | ParseError, ApiService>) =>
    (res) =>
        pipe(ApiService.extractBody(res), Effect.flatMap(Schema.decodeUnknownEither(schema)));
