import { Data } from "effect";

export class NetworkError extends Data.TaggedError("NetworkError")<{
    readonly path: string;
    readonly message: string;
    readonly originalError: unknown;
}> { }

export class HttpError extends Data.TaggedError("HttpError")<{
    readonly status: number;
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
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

export class UnknownApiError extends Data.TaggedError("UnknownApiError")<{
    readonly message: string;
    readonly originalError: unknown;
}> { }

/**
 * ApiError のユニオン型
 * これが Effect のエラー型引数として使われます
 */
export type ApiError =
    NetworkError |
    HttpError |
    TimeoutError |
    ParseJsonError |
    UnknownApiError;
