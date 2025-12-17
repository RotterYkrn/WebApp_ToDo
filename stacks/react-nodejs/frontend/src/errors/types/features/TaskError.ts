import { Data } from "effect";

export class TaskTypeError extends Data.TaggedError("TaskTypeError")<{
    readonly message: string;
    readonly taskType: number;
}> { }

export class TaskUnknownError extends Data.TaggedError("TaskError")<{
    readonly message: string;
    readonly originalError: unknown;
}> { }

export type TaskError =
    | TaskTypeError
    | TaskUnknownError;
