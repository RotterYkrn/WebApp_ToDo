import { AppError } from "../types/AppError";
import {
    BadRequestError,
    ForbiddenError,
    InternalServerError,
    NotFoundError,
    OtherClientError,
    OtherServerError,
    UnauthorizedError,
    UnknownHttpError
} from "../types/HttpError";

export const isHttpError = (error: AppError) => {
    return (
        error instanceof BadRequestError ||
        error instanceof UnauthorizedError ||
        error instanceof ForbiddenError ||
        error instanceof NotFoundError ||
        error instanceof InternalServerError ||
        error instanceof OtherClientError ||
        error instanceof OtherServerError ||
        error instanceof UnknownHttpError
    )
}