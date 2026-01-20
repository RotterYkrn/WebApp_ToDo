import { Effect, Layer, pipe, Schema } from "effect";

import { SessionService } from "./SessionService.js";

export const SessionLive = Layer.succeed(
    SessionService,
    SessionService.of({
        create: (userId) =>
            pipe(
                userId,
                Schema.encodeEither(Schema.Number),
                Effect.flatMap((userId) =>
                    Effect.succeed({
                        userId,
                        sessionId: "true",
                    }),
                ),
            ),

        verify: (sessionId) =>
            pipe(
                sessionId,
                Schema.encodeEither(Schema.String),
                Effect.flatMap((id) => Effect.succeed(id === "true")),
            ),

        revoke: (sessionId) =>
            pipe(
                sessionId,
                Schema.encodeEither(Schema.String),
                Effect.flatMap(() => Effect.succeed(void 0)),
            ),
    }),
);
