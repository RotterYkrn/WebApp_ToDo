import { SignInInput, SignUpInput, UserId } from "@1day-todo/shared";
import { Effect, ParseResult } from "effect";

import { InvalidCredentialsError } from "@/errors/AuthErrors.js";

interface IAuthService {
    readonly register: (credentials: SignUpInput) => Effect.Effect<void, ParseResult.ParseError>;
    readonly verifyCredentials: (
        credentials: SignInInput,
    ) => Effect.Effect<UserId, ParseResult.ParseError | InvalidCredentialsError>;
}

export class AuthService extends Effect.Tag("AuthService")<AuthService, IAuthService>() {}
