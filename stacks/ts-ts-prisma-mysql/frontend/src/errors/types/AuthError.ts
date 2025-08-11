import { Data } from "effect";

export class Unauthorized extends Data.TaggedError("Unauthorized")<{
    readonly message: string;
}> { }

export class SignoutError extends Data.TaggedError("SignoutError")<{
    readonly message: string;
    readonly status: number;
}> { }

export type AuthError = Unauthorized | SignoutError;
