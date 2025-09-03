import { AppError, SharedError } from "@/errors";
import { ApiService } from "@/shared/http";
import { EmailAddress, Password, UserId } from "@app/shared";
import { Effect } from "effect";

export interface IAuthService {
  readonly checkSession: () => Effect.Effect<boolean, AppError, ApiService>;
  readonly signInApi: (
    email: EmailAddress,
    password: Password
  ) => Effect.Effect<UserId, SharedError, ApiService>;
  readonly signOutApi: () => Effect.Effect<void, SharedError, ApiService>;
  readonly redirectToSignIn: () => Effect.Effect<void>;
}

export class AuthService extends Effect.Tag("AuthService")<
    AuthService,
    IAuthService
  >() { };

export type AuthDependentServices = AuthService | ApiService;
