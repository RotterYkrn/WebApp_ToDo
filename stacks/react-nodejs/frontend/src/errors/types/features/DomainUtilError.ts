import { Cause, Data } from "effect";

import { SharedError } from "../shared";

export class InternalServerError extends Data.TaggedError("InternalServerError")<{
    message: string;
    cause: SharedError;
}> {}

export class ValidationError extends Data.TaggedError("ValidationError")<{
    message: string;
    originalError: SharedError;
}> {}

export class CriticalError extends Data.TaggedError("CriticalError")<{
    message: string;
    cause: Cause.Cause<unknown>;
}> {}

export type DomainUtilError = InternalServerError | ValidationError;
