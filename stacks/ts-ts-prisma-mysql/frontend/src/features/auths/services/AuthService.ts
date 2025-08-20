import { AppError } from "@/errors";
import { ApiService } from "@/shared/http";
import { Effect } from "effect";

export interface IAuthService {
  readonly checkSession: () => Effect.Effect<boolean, AppError, ApiService>;
  readonly signOutApi: () => Effect.Effect<void, AppError, ApiService>;
  readonly redirectToSignIn: () => Effect.Effect<void>;
}

export class AuthService extends Effect.Tag("AuthService")<
    AuthService,
    IAuthService
  >() { };

export type AuthDependentServices = AuthService | ApiService;
