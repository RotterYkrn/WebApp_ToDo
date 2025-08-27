import { AppError, TaskTypeError } from "@/errors";
import { ApiService, extractJsonBody } from "@/shared/http";
import { parseObjectToSchema } from "@/shared/utils";
import { TaskApiPathMap, TaskSchemaMap, TaskType } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { TaskService } from "./TaskService";

export const TaskLive = Layer.succeed(TaskService, TaskService.of({
    getAllTasksApi: <T extends TaskType>(taskType: T) => pipe(
        ApiService.get(TaskApiPathMap[taskType].GET_ALL, { credentials: "include" }),
        extractJsonBody(),
        parseToTaskSchemaChunk(taskType),
    ),
    createTaskApi: <T extends TaskType>(taskType: T, taskItem: TaskSchemaMap[T]["Type"]) => pipe(
        ApiService.post(
            TaskApiPathMap[taskType].CREATE,
            {
                body: taskItem,
                options: {
                    credentials: "include",
                }
            }
        ),
        extractJsonBody(),
        parseToTaskSchemaData(taskType),
    ),
}));

export const parseToTaskSchemaData = <T extends TaskType>(
    taskType: T
) => <R>(
    objEffect: Effect.Effect<unknown, AppError, R>
): Effect.Effect<TaskSchemaMap[T]["Type"], AppError, R> => {
        switch (taskType) {
            case TaskType.DAILY_PLAN:
                return objEffect.pipe(
                    parseObjectToSchema(TaskSchemaMap[TaskType.DAILY_PLAN]["Schema"])
                );
            case TaskType.TODO:
                return objEffect.pipe(
                    parseObjectToSchema(TaskSchemaMap[TaskType.TODO]["Schema"])
                );
            case TaskType.HABIT:
                return objEffect.pipe(
                    parseObjectToSchema(TaskSchemaMap[TaskType.HABIT]["Schema"])
                );
            default:
                return Effect.fail(new TaskTypeError({
                    message: "Unknown task type",
                    taskType: taskType
                }));
        }
    };

export const parseToTaskSchemaChunk = <T extends TaskType>(
    taskType: T
) => <R>(
    objEffect: Effect.Effect<unknown, AppError, R>
): Effect.Effect<TaskSchemaMap[T]["ChunkType"], AppError, R> => {
        switch (taskType) {
            case TaskType.DAILY_PLAN:
                return objEffect.pipe(
                    parseObjectToSchema(TaskSchemaMap[TaskType.DAILY_PLAN]["ChunkSchema"])
                );
            case TaskType.TODO:
                return objEffect.pipe(
                    parseObjectToSchema(TaskSchemaMap[TaskType.TODO]["ChunkSchema"])
                );
            case TaskType.HABIT:
                return objEffect.pipe(
                    parseObjectToSchema(TaskSchemaMap[TaskType.HABIT]["ChunkSchema"])
                );
            default:
                return Effect.fail(new TaskTypeError({
                    message: "Unknown task type",
                    taskType: taskType
                }));
        }
    };
