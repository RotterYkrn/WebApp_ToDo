import { Todo, TodoChunk, TodoCreate, TodoUpdate } from "@1day-todo/shared";
import { Effect } from "effect";
import { ParseError } from "effect/ParseResult";

export interface ITodoService {
    readonly findAll: () => Effect.Effect<TodoChunk, ParseError>;
    readonly create: (todo: TodoCreate) => Effect.Effect<Todo, ParseError>;
    readonly update: (id: number, todo: TodoUpdate) => Effect.Effect<Todo, ParseError>;
    readonly delete: (id: number) => Effect.Effect<number, ParseError>;
}

export class TodoService extends Effect.Tag("TodoService")<TodoService, ITodoService>() {}
