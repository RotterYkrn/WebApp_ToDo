import { Data } from "effect";

export class InvalidCredentialsError extends Data.TaggedError("InvalidCredentialsError")<{
    readonly message: string;
}> {}

export class InvalidSessionError extends Data.TaggedError("InvalidSessionError")<{
    readonly message: string;
}> {}
