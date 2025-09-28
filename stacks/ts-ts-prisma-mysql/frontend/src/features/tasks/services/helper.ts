import { ParseSchemaError, ResponseJsonError, TaskTypeError } from "@/errors";
import { ApiService, extractBodyWithSchema } from "@/shared/http";
import { TaskSchemaMap, TaskType } from "@app/shared";
import { Effect } from "effect";

export const extractTaskSchemaData = <T extends TaskType>(
    taskType: T
): (res: Response) => Effect.Effect<
    TaskSchemaMap[T]["Type"],
    ResponseJsonError | ParseSchemaError | TaskTypeError,
    ApiService
> => {
    switch (taskType) {
        case TaskType.DAILY_PLAN:
            return extractBodyWithSchema(TaskSchemaMap[TaskType.DAILY_PLAN]["Schema"]);
        case TaskType.TODO:
            return extractBodyWithSchema(TaskSchemaMap[TaskType.TODO]["Schema"]);
        case TaskType.HABIT:
            return extractBodyWithSchema(TaskSchemaMap[TaskType.HABIT]["Schema"]);
        default:
            return () => Effect.fail(new TaskTypeError({
                message: "Unknown task type",
                taskType: taskType
            }));
    }
};

export const extractTaskSchemaDataChunk = <T extends TaskType>(
    taskType: T
): (res: Response) => Effect.Effect<
    TaskSchemaMap[T]["ChunkType"],
    ResponseJsonError | ParseSchemaError | TaskTypeError,
    ApiService
> => {
    switch (taskType) {
        case TaskType.DAILY_PLAN:
            return extractBodyWithSchema(TaskSchemaMap[TaskType.DAILY_PLAN]["ChunkSchema"]);
        case TaskType.TODO:
            return extractBodyWithSchema(TaskSchemaMap[TaskType.TODO]["ChunkSchema"]);
        case TaskType.HABIT:
            return extractBodyWithSchema(TaskSchemaMap[TaskType.HABIT]["ChunkSchema"]);
        default:
            return () => Effect.fail(new TaskTypeError({
                message: "Unknown task type",
                taskType: taskType
            }));
    }
};
