import { Data } from "effect";

export class TaskTypeError extends Data.TaggedError("TaskTypeError")<{
    readonly message: string;
    readonly taskType: number;
}> { }

export type TaskError =
    | TaskTypeError;
