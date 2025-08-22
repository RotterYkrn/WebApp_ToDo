import { ApiService, parseResponseJson } from "@/shared/http";
import { TaskApiPathMap, type TaskResponseMap, type TaskType } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { TaskService } from "./TaskService";

export const TaskLive = Layer.succeed(TaskService, TaskService.of({
    getAllTasksApi: <T extends TaskType>(taskType: T) => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.get(TaskApiPathMap[taskType].GET_ALL, { credentials: "include" });
        }),
        parseResponseJson<TaskResponseMap[T][]>(),
    ),
    createTaskApi: <T extends TaskType>(taskType: T, taskItem: TaskResponseMap[T]) => pipe(
        Effect.gen(function* () {
            const apiService = yield* ApiService;
            return yield* apiService.post(
                TaskApiPathMap[taskType].CREATE,
                {
                    body: taskItem,
                    options: {
                        credentials: "include",
                    }
                }
            );
        }),
        parseResponseJson<TaskResponseMap[T]>(),
    ),
}));
