import { Data } from "effect";

export class UIError extends Data.TaggedError("UIError")<{
    message: string;
    originalError: unknown;
}> { }
