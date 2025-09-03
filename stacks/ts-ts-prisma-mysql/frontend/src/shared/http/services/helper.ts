import {
    BadRequestError,
    ForbiddenError,
    HttpError,
    InternalServerError,
    NotFoundError,
    OtherClientError,
    OtherServerError,
    UnauthorizedError,
    UnknownHttpError,
} from "@/errors";
import { Effect } from "effect";
import { HttpStatus } from "../types/HttpStatus";

interface ErrorInfo {
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}

export const handleHttpError = (
    path: string,
    message: string
): (res: Response) => Effect.Effect<Response, HttpError> =>
    (res) =>
        res.ok
            ? Effect.succeed(res)
            : Effect.fail(classifyHttpError(res, {
                path,
                message,
                responseBody: res.body,
            }))

export const ensureHttpStatus = (
    expectedStatus: HttpStatus,
    method: "GET" | "POST",
    path: string
): (res: Response) => Effect.Effect<Response, UnknownHttpError> =>
    (res) =>
        res.status === expectedStatus
            ? Effect.succeed(res)
            : Effect.fail(new UnknownHttpError({
                message: `${method}: Unexpected status (expected ${expectedStatus})`,
                path,
                status: res.status,
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
