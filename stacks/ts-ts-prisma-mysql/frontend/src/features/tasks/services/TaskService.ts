import { SharedError, TaskTypeError } from "@/errors";
import { ApiService } from "@/shared/http";
import { TaskSchemaMap, TaskType } from "@app/shared";
import { Effect } from "effect";

export interface ITaskService {
    readonly getAllTasksApi: <T extends TaskType>(taskType: T) =>
        Effect.Effect<TaskSchemaMap[T]["ChunkType"], SharedError | TaskTypeError, ApiService>;
    readonly createTaskApi: <T extends TaskType>(taskType: T, taskItem: TaskSchemaMap[T]["Type"]) =>
        Effect.Effect<TaskSchemaMap[T]["Type"], SharedError | TaskTypeError, ApiService>;
    // readonly deleteTask: (taskId: string) => Effect.Effect<void, SharedError | TaskTypeError, ApiService>;
}

export class TaskService extends Effect.Tag("TaskService")<
    TaskService,
    ITaskService
  >() { };
