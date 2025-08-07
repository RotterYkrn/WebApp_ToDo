import { Data } from "effect";

export class Unauthorized extends Data.TaggedError("Unauthorized")<{
    readonly message: string;
}> { }

export type AuthError = Unauthorized;
