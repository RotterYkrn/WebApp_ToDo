import { Data } from "effect";

export class NetworkError extends Data.TaggedError("NetworkError")<{
    readonly path: string;
    readonly message: string;
    readonly originalError: unknown;
}> { }

export class TimeoutError extends Data.TaggedError("TimeoutError")<{
    readonly path: string;
    readonly message: string;
}> { }

export class ParseJsonError extends Data.TaggedError("ParseJsonError")<{
    readonly message: string;
    readonly responseJson: unknown;
    readonly originalError: unknown;
}> { }

export class UnknownAppError extends Data.TaggedError("UnknownAppError")<{
    readonly message: string;
    readonly originalError: unknown;
}> { }

export type OtherError =
    | NetworkError
    | TimeoutError
    | ParseJsonError
    | UnknownAppError;
