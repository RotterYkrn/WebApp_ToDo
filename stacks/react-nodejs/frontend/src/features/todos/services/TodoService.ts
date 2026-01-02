import { SharedError } from "@/errors";
import { ApiService } from "@/shared/http";
import { Todo, TodoInput } from "@1day-todo/shared";
import { Chunk, Effect } from "effect";

export interface ITodoService {
    readonly getAllTodosApi: () =>
        Effect.Effect<Chunk.Chunk<Todo>, SharedError, ApiService>;
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
