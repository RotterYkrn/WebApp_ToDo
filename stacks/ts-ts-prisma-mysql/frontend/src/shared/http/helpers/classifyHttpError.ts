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
import { HttpStatus } from "../types/HttpStatus";

interface ErrorInfo {
    readonly path: string;
    readonly message: string;
    readonly responseBody: unknown;
}

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
