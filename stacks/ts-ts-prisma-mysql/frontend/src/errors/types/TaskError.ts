import { Data } from "effect";

export class TaskTypeError extends Data.TaggedError("Unauthorized")<{
    readonly message: string;
    readonly taskType: number;
}> { }

export type TaskError =
    | TaskTypeError;
