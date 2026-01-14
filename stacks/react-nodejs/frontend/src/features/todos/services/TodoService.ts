import { Todo, TodoChunk, TodoCreate, TodoUpdate } from "@1day-todo/shared";
import { Effect } from "effect";

import { InternalServerError } from "@/errors";
import { ApiService } from "@/shared/http";

export interface ITodoService {
    readonly getAllTodosApi: () => Effect.Effect<TodoChunk, InternalServerError, ApiService>;
    readonly createTodoApi: (
        newTodo: TodoCreate,
    ) => Effect.Effect<Todo, InternalServerError, ApiService>;
    readonly updateTodoApi: (
        id: number,
        updatedTodo: TodoUpdate,
    ) => Effect.Effect<Todo, InternalServerError, ApiService>;
    readonly deleteTodoApi: (id: number) => Effect.Effect<number, InternalServerError, ApiService>;
}

export class TodoService extends Effect.Tag("TodoService")<TodoService, ITodoService>() {}
