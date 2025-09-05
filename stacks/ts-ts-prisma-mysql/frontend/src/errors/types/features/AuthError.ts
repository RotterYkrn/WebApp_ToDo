import { Data } from "effect";
import { SharedError } from "../shared";

export class Unauthorized extends Data.TaggedError("Unauthorized")<{
    readonly message: string;
}> { }

export class SignUpError extends Data.TaggedError("SignUpError")<{
    readonly message: string;
    readonly originalError: SharedError;
}> { }

export class SignInError extends Data.TaggedError("SignInError")<{
    readonly message: string;
    readonly originalError: SharedError;
}> { }

export class SignOutError extends Data.TaggedError("SignOutError")<{
    readonly message: string;
    readonly originalError: SharedError;
}> { }

export type AuthError =
    | Unauthorized
    | SignUpError
    | SignInError
    | SignOutError;
