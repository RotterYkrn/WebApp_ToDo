import { Data } from "effect";

// 400
export class HttpBadRequestError extends Data.TaggedError("HttpBadRequestError")<{
    path: string;
    message: string;
    responseBody: unknown;
}> {}

// 401
export class HttpUnauthorizedError extends Data.TaggedError("HttpUnauthorizedError")<{
    path: string;
    message: string;
    responseBody: unknown;
}> {}

// 403
export class HttpForbiddenError extends Data.TaggedError("HttpForbiddenError")<{
    path: string;
    message: string;
    responseBody: unknown;
}> {}

// 404
export class HttpNotFoundError extends Data.TaggedError("HttpNotFoundError")<{
    path: string;
    message: string;
    responseBody: unknown;
}> {}

// 4xx
export class HttpOtherClientError extends Data.TaggedError("HttpOtherClientError")<{
    status: number;
    path: string;
    message: string;
    responseBody: unknown;
}> {}

// 5xx
export class HttpOtherServerError extends Data.TaggedError("HttpOtherServerError")<{
    status: number;
    path: string;
    message: string;
    responseBody: unknown;
}> {}

export class HttpUnexpectedStatusError extends Data.TaggedError("HttpUnexpectedStatusError")<{
    message: string;
    path: string;
    expectedStatus: number;
    responseStatus: number;
}> {}

// Other
export class HttpUnknownError extends Data.TaggedError("HttpUnknownError")<{
    status: number;
    path: string;
    message: string;
    responseBody?: unknown;
}> {}

/**
 * HttpError のユニオン型
 */
export type HttpError =
    | HttpBadRequestError
    | HttpUnauthorizedError
    | HttpForbiddenError
    | HttpNotFoundError
    | HttpOtherClientError
    | HttpOtherServerError
    | HttpUnexpectedStatusError
    | HttpUnknownError;
