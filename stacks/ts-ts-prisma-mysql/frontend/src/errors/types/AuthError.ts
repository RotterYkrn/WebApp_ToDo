import { Data } from "effect";

export class Unauthorized extends Data.TaggedError("Unauthorized")<{
    readonly message: string;
}> { }

export class SignInError extends Data.TaggedError("SignInError")<{
    readonly message: string;
    readonly originalError?: unknown;
}> { }

export class SignOutError extends Data.TaggedError("SignOutError")<{
    readonly message: string;
    readonly originalError?: unknown;
}> { }

export type AuthError =
    | Unauthorized
    | SignInError
    | SignOutError;
