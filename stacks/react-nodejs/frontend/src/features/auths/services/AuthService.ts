import { SignInInput, SignUpInput, UserId } from "@1day-todo/shared";
import { Effect } from "effect";

import { InvalidCredentialsError, InvalidSessionError } from "@/errors/types/features/AuthError";
import { InternalServerError } from "@/errors/types/features/DomainUtilError";
import { ApiService } from "@/shared/http/services/ApiService";

export interface IAuthService {
    readonly checkSession: () => Effect.Effect<
        UserId,
        InvalidSessionError | InternalServerError,
        ApiService
    >;

    readonly signUpApi: (
        input: SignUpInput,
    ) => Effect.Effect<void, InternalServerError, ApiService>;

    readonly signInApi: (
        input: SignInInput,
    ) => Effect.Effect<void, InvalidCredentialsError | InternalServerError, ApiService>;

    readonly signOutApi: () => Effect.Effect<void, InternalServerError, ApiService>;
}

export class AuthService extends Effect.Tag("AuthService")<AuthService, IAuthService>() {}

export type AuthDependentServices = AuthService | ApiService;
