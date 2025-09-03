
import { AuthError, TaskError } from "./features";
import { SharedError } from "./shared";

export type AppError =
    | SharedError
    | AuthError
    | TaskError;
