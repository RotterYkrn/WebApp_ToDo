import { Todo, TodoChunk, TodoInput } from "@1day-todo/shared";
import { Effect } from "effect";

import { InternalServerError } from "@/errors";
import { ApiService } from "@/shared/http";

export interface ITodoService {
    readonly getAllTodosApi: () => Effect.Effect<TodoChunk, InternalServerError, ApiService>;
    readonly createTodoApi: (
        newTodo: TodoInput,
    ) => Effect.Effect<Todo, InternalServerError, ApiService>;
    readonly updateTodoApi: (
        id: number,
        updatedTodo: TodoInput,
    ) => Effect.Effect<Todo, InternalServerError, ApiService>;
    readonly deleteTodoApi: (id: number) => Effect.Effect<number, InternalServerError, ApiService>;
}

export class TodoService extends Effect.Tag("TodoService")<TodoService, ITodoService>() {}
