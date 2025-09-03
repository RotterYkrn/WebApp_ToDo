import { HttpError } from "./HttpError";
import { OtherError } from "./OtherError";

export type SharedError =
    | HttpError
    | OtherError;
