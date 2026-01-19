import { Either } from "effect";

import { HttpStatus } from "../types/HttpStatus";

import {
    HttpBadRequestError,
    HttpError,
    HttpForbiddenError,
    HttpNotFoundError,
    HttpOtherClientError,
    HttpOtherServerError,
    HttpUnauthorizedError,
    HttpUnexpectedStatusError,
    HttpUnknownError,
} from "@/errors/types/shared/HttpError";

interface ErrorInfo {
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}

export const handleHttpError =
    (path: string, message: string): ((res: Response) => Either.Either<Response, HttpError>) =>
    (res) =>
        res.ok
            ? Either.right(res)
            : Either.left(
                  classifyHttpError(res, {
                      path,
                      message,
                      responseBody: res.body,
                  }),
              );

export const ensureHttpStatus =
    (
        expectedStatus: HttpStatus,
        method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
        path: string,
    ): ((res: Response) => Either.Either<Response, HttpUnexpectedStatusError>) =>
    (res) =>
        res.status === expectedStatus
            ? Either.right(res)
            : Either.left(
                  new HttpUnexpectedStatusError({
                      message: `${method}: Received unexpected status.`,
                      path,
                      expectedStatus,
                      responseStatus: res.status,
                  }),
              );

export const classifyHttpError = (res: Response, errorInfo: ErrorInfo): HttpError => {
    switch (res.status) {
        case HttpStatus.BAD_REQUEST:
            return new HttpBadRequestError(errorInfo);
        case HttpStatus.UNAUTHORIZED:
            return new HttpUnauthorizedError(errorInfo);
        case HttpStatus.FORBIDDEN:
            return new HttpForbiddenError(errorInfo);
        case HttpStatus.NOT_FOUND:
            return new HttpNotFoundError(errorInfo);
        default:
            if (res.status >= 400 && res.status < 500) {
                return new HttpOtherClientError({ ...errorInfo, status: res.status });
            }
            if (res.status >= 500 && res.status < 600) {
                return new HttpOtherServerError({ ...errorInfo, status: res.status });
            }
            return new HttpUnknownError({ ...errorInfo, status: res.status });
    }
};
