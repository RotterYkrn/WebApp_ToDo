import { HttpError } from "./HttpError";
import { AuthError } from "./AuthError";
import { OtherError } from "./OtherError";

export type AppError =
    | HttpError
    | AuthError
    | OtherError;
