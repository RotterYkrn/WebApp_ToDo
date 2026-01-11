import { Data } from "effect";

export class NetworkError extends Data.TaggedError("NetworkError")<{
    readonly path: string;
    readonly message: string;
    readonly originalError: unknown;
}> {}

export class TimeoutError extends Data.TaggedError("TimeoutError")<{
    readonly path: string;
    readonly message: string;
}> {}

export class ResponseJsonError extends Data.TaggedError("ResponseJsonError")<{
    readonly message: string;
    readonly originalError: unknown;
}> {}

export class UnknownAppError extends Data.TaggedError("UnknownAppError")<{
    readonly message: string;
    readonly originalError: unknown;
}> {}

export type OtherError = NetworkError | TimeoutError | ResponseJsonError | UnknownAppError;
