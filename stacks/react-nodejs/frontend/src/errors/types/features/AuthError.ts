import { Data } from "effect";

export class InvalidSessionError extends Data.TaggedError("InvalidSessionError")<{
    readonly message: string;
}> {}

export class InvalidCredentialsError extends Data.TaggedError("InvalidCredentialsError")<{
    readonly message: string;
}> {}

export type AuthError = InvalidSessionError | InvalidCredentialsError;
