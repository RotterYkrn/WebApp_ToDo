import { Data } from "effect";

// 400
export class BadRequestError extends Data.TaggedError("BadRequestError")<{
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}> { }

// 401
export class UnauthorizedError extends Data.TaggedError("UnauthorizedError")<{
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}> { }

// 403
export class ForbiddenError extends Data.TaggedError("ForbiddenError")<{
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}> { }

// 404
export class NotFoundError extends Data.TaggedError("NotFoundError")<{
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}> { }

// 500
export class InternalServerError extends Data.TaggedError("InternalServerError")<{
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}> { }

// 4xx
export class OtherClientError extends Data.TaggedError("OtherClientError")<{
    readonly status: number;
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}> { }

// 5xx
export class OtherServerError extends Data.TaggedError("OtherServerError")<{
    readonly status: number;
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}> { }

// Other
export class UnknownHttpError extends Data.TaggedError("UnknownHttpError")<{
    readonly status: number;
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}> { }

/**
 * HttpError のユニオン型
 */
export type HttpError =
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | NotFoundError
    | InternalServerError
    | OtherClientError
    | OtherServerError
    | UnknownHttpError;
