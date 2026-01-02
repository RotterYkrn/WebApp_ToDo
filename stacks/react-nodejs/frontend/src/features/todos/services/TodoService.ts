import { SharedError } from "@/errors";
import { ApiService } from "@/shared/http";
import { Todo, TodoChunk, TodoInput } from "@1day-todo/shared";
import { Effect } from "effect";

export interface ITodoService {
    readonly getAllTodosApi: () =>
        Effect.Effect<TodoChunk, SharedError, ApiService>;
    readonly createTodoApi: (newTodo: TodoInput) =>
        Effect.Effect<Todo, SharedError, ApiService>;
    readonly updateTodoApi: (id: number, updatedTodo: TodoInput) =>
        Effect.Effect<Todo, SharedError, ApiService>;
    readonly deleteTodoApi: (id: number) =>
        Effect.Effect<number, SharedError, ApiService>;
}

export class TodoService extends Effect.Tag("TodoService")<
    TodoService,
    ITodoService
  >() { };
