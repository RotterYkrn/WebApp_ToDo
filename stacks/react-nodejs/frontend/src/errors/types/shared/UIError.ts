import { Chunk, Data } from "effect";

export class AppendElementsError extends Data.TaggedError("AppendElementsError")<{
    readonly message: string;
    readonly parent: HTMLElement;
    readonly children: Chunk.Chunk<HTMLElement>;
    readonly originalError: unknown;
}> { }

export class UIUnknownError extends Data.TaggedError("UIUnknownError")<{
    readonly message: string;
    readonly originalError?: unknown;
}> { }

export type UIError =
    | AppendElementsError
    | UIUnknownError;
