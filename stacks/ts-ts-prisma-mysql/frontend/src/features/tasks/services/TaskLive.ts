import { ApiService, HttpStatus } from "@/shared/http";
import { TaskApiPathMap, TaskSchemaMap, TaskType } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { TaskService } from "./TaskService";
import { parseToTaskSchemaChunk, parseToTaskSchemaData } from "./helper";

export const TaskLive = Layer.succeed(TaskService, TaskService.of({
    getAllTasksApi: <T extends TaskType>(taskType: T) => pipe(
        ApiService.get(
            TaskApiPathMap[taskType].GET_ALL,
            HttpStatus.OK,
            { credentials: "include" }
        ),
        Effect.flatMap(ApiService.extractBody),
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
        Effect.flatMap(ApiService.extractBody),
        Effect.flatMap(parseToTaskSchemaData(taskType)),
    ),
}));
