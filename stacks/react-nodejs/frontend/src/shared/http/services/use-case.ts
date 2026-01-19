import { Effect, ParseResult, pipe, Schema } from "effect";

import { ApiService } from "./ApiService";

import { ResponseJsonError } from "@/errors/types/shared/OtherError";

export const extractBodyWithSchema =
    <A, I>(
        schema: Schema.Schema<A, I>,
    ): ((
        res: Response,
    ) => Effect.Effect<A, ResponseJsonError | ParseResult.ParseError, ApiService>) =>
    (res) =>
        pipe(ApiService.extractBody(res), Effect.flatMap(Schema.decodeUnknownEither(schema)));
