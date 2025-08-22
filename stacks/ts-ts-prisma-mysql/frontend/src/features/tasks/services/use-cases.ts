import { TaskType } from "@app/shared";
import { Effect } from "effect";
import { TaskService } from "./TaskService";

export const getAllTasks = (taskType: TaskType) =>
    Effect.gen(function* () {
        const taskService = yield* TaskService;
        return yield* taskService.getAllTasksApi(taskType);
    });
