import { AppError } from "@/errors";
import { ApiService } from "@/shared/http";
import { TaskSchemaMap, TaskType } from "@app/shared";
import { Effect } from "effect";

export interface ITaskService {
    readonly getAllTasksApi: <T extends TaskType>(taskType: T) =>
        Effect.Effect<TaskSchemaMap[T]["ChunkType"], AppError, ApiService>;
    readonly createTaskApi: <T extends TaskType>(taskType: T, taskItem: TaskSchemaMap[T]["Type"]) =>
        Effect.Effect<TaskSchemaMap[T]["Type"], AppError, ApiService>;
    // readonly deleteTask: (taskId: string) => Effect.Effect<void, AppError, ApiService>;
}

export class TaskService extends Effect.Tag("TaskService")<
    TaskService,
    ITaskService
  >() { };
