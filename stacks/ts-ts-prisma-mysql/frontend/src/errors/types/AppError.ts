import { AuthError } from "./AuthError";
import { HttpError } from "./HttpError";
import { OtherError } from "./OtherError";
import { TaskError } from "./TaskError";

export type AppError =
    | HttpError
    | AuthError
    | TaskError
    | OtherError;
