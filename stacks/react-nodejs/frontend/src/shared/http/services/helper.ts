import {
    BadRequestError,
    ForbiddenError,
    HttpError,
    InternalServerError,
    NotFoundError,
    OtherClientError,
    OtherServerError,
    UnauthorizedError,
    UnexpectedStatusError,
    UnknownHttpError,
} from "@/errors";
import { Either } from "effect";
import { HttpStatus } from "../types/HttpStatus";

interface ErrorInfo {
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}

export const handleHttpError = (
    path: string,
    message: string
): (res: Response) => Either.Either<Response, HttpError> =>
    (res) =>
        res.ok
            ? Either.right(res)
            : Either.left(classifyHttpError(res, {
                path,
                message,
                responseBody: res.body,
            }))

export const ensureHttpStatus = (
    expectedStatus: HttpStatus,
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
    path: string
): (res: Response) => Either.Either<Response, UnexpectedStatusError> =>
    (res) =>
        res.status === expectedStatus
            ? Either.right(res)
            : Either.left(new UnexpectedStatusError({
                message: `${method}: Received unexpected status.`,
                path,
                expectedStatus,
                responseStatus: res.status,
            }));

export const classifyHttpError = (res: Response, errorInfo: ErrorInfo): HttpError => {
    switch (res.status) {
        case HttpStatus.BAD_REQUEST:
            return new BadRequestError(errorInfo);
        case HttpStatus.UNAUTHORIZED:
            return new UnauthorizedError(errorInfo);
        case HttpStatus.FORBIDDEN:
            return new ForbiddenError(errorInfo);
        case HttpStatus.NOT_FOUND:
            return new NotFoundError(errorInfo);
        case HttpStatus.INTERNAL_SERVER_ERROR:
            return new InternalServerError(errorInfo);
        default:
            if (res.status >= 400 && res.status < 500) {
                return new OtherClientError({ ...errorInfo, status: res.status });
            }
            if (res.status >= 500 && res.status < 600) {
                return new OtherServerError({ ...errorInfo, status: res.status });
            }
            return new UnknownHttpError({ ...errorInfo, status: res.status });
    }
};
