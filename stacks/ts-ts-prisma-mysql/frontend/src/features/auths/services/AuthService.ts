import { SharedError } from "@/errors";
import { ApiService } from "@/shared/http";
import { SignInInput, SignUpInput, UserId } from "@app/shared";
import { Effect } from "effect";

export interface IAuthService {
  readonly checkSession: () => Effect.Effect<UserId, SharedError, ApiService>;
  readonly signUpApi: (
    input: SignUpInput
  ) => Effect.Effect<void, SharedError, ApiService>;
  readonly signInApi: (
    input: SignInInput
  ) => Effect.Effect<void, SharedError, ApiService>;
  readonly signOutApi: () => Effect.Effect<void, SharedError, ApiService>;
}

export class AuthService extends Effect.Tag("AuthService")<
    AuthService,
    IAuthService
  >() { };

export type AuthDependentServices = AuthService | ApiService;
