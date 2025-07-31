import { Effect } from "effect";
import { ApiError, ApiService } from "@/core/http";
import { AuthError } from "../types/AuthError";

export interface Auth {
  readonly checkSession: Effect.Effect<boolean, AuthError | ApiError, ApiService>;
  readonly redirectToSignIn: Effect.Effect<void>;
}

export class AuthService extends Effect.Tag("AuthService")<
    AuthService,
    Auth
    >() { };