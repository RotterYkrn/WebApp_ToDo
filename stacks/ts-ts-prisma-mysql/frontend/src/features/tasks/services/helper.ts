import { ParseSchemaError, TaskTypeError } from "@/errors";
import { parseToSchema } from "@/shared/utils";
import { TaskSchemaMap, TaskType } from "@app/shared";
import { Effect } from "effect";

export const parseToTaskSchemaData = <T extends TaskType>(
    taskType: T
): (obj: unknown) => Effect.Effect<TaskSchemaMap[T]["Type"], ParseSchemaError | TaskTypeError> => {
        switch (taskType) {
            case TaskType.DAILY_PLAN:
                return parseToSchema(TaskSchemaMap[TaskType.DAILY_PLAN]["Schema"]);
            case TaskType.TODO:
                return parseToSchema(TaskSchemaMap[TaskType.TODO]["Schema"]);
            case TaskType.HABIT:
                return parseToSchema(TaskSchemaMap[TaskType.HABIT]["Schema"]);
            default:
                return () => Effect.fail(new TaskTypeError({
                    message: "Unknown task type",
                    taskType: taskType
                }));
        }
    };

export const parseToTaskSchemaChunk = <T extends TaskType>(
    taskType: T
): (obj: unknown) => Effect.Effect<TaskSchemaMap[T]["ChunkType"], ParseSchemaError | TaskTypeError> => {
        switch (taskType) {
            case TaskType.DAILY_PLAN:
                return parseToSchema(TaskSchemaMap[TaskType.DAILY_PLAN]["ChunkSchema"]);
            case TaskType.TODO:
                return parseToSchema(TaskSchemaMap[TaskType.TODO]["ChunkSchema"]);
            case TaskType.HABIT:
                return parseToSchema(TaskSchemaMap[TaskType.HABIT]["ChunkSchema"]);
            default:
                return () => Effect.fail(new TaskTypeError({
                    message: "Unknown task type",
                    taskType: taskType
                }));
        }
    };
