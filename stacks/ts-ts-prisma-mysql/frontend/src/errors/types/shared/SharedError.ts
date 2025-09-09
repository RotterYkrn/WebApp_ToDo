import { HttpError } from "./HttpError";
import { OtherError } from "./OtherError";
import { UIError } from "./UIError";

export type SharedError =
    | HttpError
    | UIError
    | OtherError;
