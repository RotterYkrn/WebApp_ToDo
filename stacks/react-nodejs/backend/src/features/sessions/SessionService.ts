import { Effect, ParseResult } from "effect";

import { SessionInfo } from "./types.js";

interface ISessionService {
    readonly create: (userId: number) => Effect.Effect<SessionInfo, ParseResult.ParseError>;
    readonly verify: (sessionId: string) => Effect.Effect<boolean, ParseResult.ParseError>;
    readonly revoke: (sessionId: string) => Effect.Effect<void, ParseResult.ParseError>;
}

export class SessionService extends Effect.Tag("SessionService")<
    SessionService,
    ISessionService
>() {}
