import { Todo, TodoChunk, TodoCreate, TodoUpdate } from "@1day-todo/shared";
import { Effect } from "effect";
import { ParseError } from "effect/ParseResult";

export interface ITodoService {
    readonly getAllTodosFromDB: () => Effect.Effect<TodoChunk, ParseError>;
    readonly createTodoInDB: (todo: TodoCreate) => Effect.Effect<Todo, ParseError>;
    readonly updateTodoInDB: (id: number, todo: TodoUpdate) => Effect.Effect<Todo, ParseError>;
    readonly deleteTodoInDB: (id: number) => Effect.Effect<number, ParseError>;
}

export class TodoService extends Effect.Tag("TodoService")<TodoService, ITodoService>() {}
