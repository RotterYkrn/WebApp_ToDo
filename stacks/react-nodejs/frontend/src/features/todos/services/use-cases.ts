import { Todo, TodoChunk, TodoInput } from "@1day-todo/shared";
import { Effect, pipe, Schema } from "effect";

import { TodoService } from "./TodoService";

import { InternalServerError, ValidationError } from "@/errors";
import { ApiService } from "@/shared/http";

export const getAllTodosUseCase = (): Effect.Effect<
    TodoChunk,
    InternalServerError,
    TodoService | ApiService
> =>
    pipe(
        TodoService.getAllTodosApi(),
        Effect.mapError((e) => e),
    );

export const createTodoUseCase = (
    newTodo: TodoInput,
): Effect.Effect<Todo, ValidationError | InternalServerError, TodoService | ApiService> =>
    pipe(
        newTodo,
        Schema.decodeUnknownEither(TodoInput),
        Effect.flatMap(TodoService.createTodoApi),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "ParseError":
                    return new ValidationError({
                        message: "Invalid todo data format.",
                        originalError: e,
                    });
                default:
                    return e;
            }
        }),
    );

export const updateTodoUseCase = (
    id: number,
    updatedTodo: {
        title?: string;
        description?: string | null;
    },
): Effect.Effect<Todo, ValidationError | InternalServerError, TodoService | ApiService> =>
    pipe(
        updatedTodo,
        Schema.decodeUnknownEither(TodoInput),
        Effect.flatMap((updatedTodo) => TodoService.updateTodoApi(id, updatedTodo)),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "ParseError":
                    return new ValidationError({
                        message: "Invalid todo data format.",
                        originalError: e,
                    });
                default:
                    return e;
            }
        }),
    );

export const deleteTodoUseCase = (
    id: number,
): Effect.Effect<number, InternalServerError, TodoService | ApiService> =>
    pipe(
        id,
        TodoService.deleteTodoApi,
        Effect.mapError((e) => e),
    );
