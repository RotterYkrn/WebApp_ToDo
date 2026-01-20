import { Effect, ParseResult, pipe, Schema } from "effect";

import { SessionService } from "./SessionService.js";

export const verifySessionUseCase = (
    sessionId: string,
): Effect.Effect<boolean, ParseResult.ParseError, SessionService> =>
    pipe(sessionId, Schema.decodeEither(Schema.String), Effect.flatMap(SessionService.verify));

export const signOutUseCase = (
    sessionId: string,
): Effect.Effect<void, ParseResult.ParseError, SessionService> =>
    pipe(sessionId, Schema.decodeEither(Schema.String), Effect.flatMap(SessionService.revoke));
