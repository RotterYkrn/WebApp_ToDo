import { Todo, TodoChunk, TodoCreate, TodoUpdate } from "@1day-todo/shared";
import { Effect, ParseResult } from "effect";

export interface ITodoService {
    readonly findAll: () => Effect.Effect<TodoChunk, ParseResult.ParseError>;
    readonly create: (todo: TodoCreate) => Effect.Effect<Todo, ParseResult.ParseError>;
    readonly update: (id: number, todo: TodoUpdate) => Effect.Effect<Todo, ParseResult.ParseError>;
    readonly delete: (id: number) => Effect.Effect<number, ParseResult.ParseError>;
}

export class TodoService extends Effect.Tag("TodoService")<TodoService, ITodoService>() {}
