import { ParseSchemaError, TaskTypeError } from "@/errors";
import { ApiService, extractJsonBody, HttpStatus } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { TaskApiPathMap, TaskSchemaMap, TaskType } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { TaskService } from "./TaskService";

export const TaskLive = Layer.succeed(TaskService, TaskService.of({
    getAllTasksApi: <T extends TaskType>(taskType: T) => pipe(
        ApiService.get(
            TaskApiPathMap[taskType].GET_ALL,
            HttpStatus.OK,
            { credentials: "include" }
        ),
        Effect.flatMap(extractJsonBody()),
        Effect.flatMap(parseToTaskSchemaChunk(taskType)),
    ),
    createTaskApi: <T extends TaskType>(taskType: T, taskItem: TaskSchemaMap[T]["Type"]) => pipe(
        ApiService.post(
            TaskApiPathMap[taskType].CREATE,
            HttpStatus.CREATED,
            {
                body: taskItem,
                options: {
                    credentials: "include",
                }
            }
        ),
        Effect.flatMap(extractJsonBody()),
        Effect.flatMap(parseToTaskSchemaData(taskType)),
    ),
}));

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
