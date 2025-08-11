import { Effect } from "effect";
import { ApiService } from "@/shares/http";
import { AppError } from "@/errors";

export interface Auth {
  readonly checkSession: () => Effect.Effect<boolean, AppError, ApiService>;
  readonly signout: () => Effect.Effect<void, AppError, ApiService>;
  readonly redirectToSignIn: () => Effect.Effect<void>;
}

export class AuthService extends Effect.Tag("AuthService")<
    AuthService,
    Auth
  >() { };
