import { TodoCreate, TodoCreateEncoded } from "@1day-todo/shared";
import { Effect, pipe, Schema } from "effect";

import { TodoService } from "./TodoService.js";

export const getAllTodosUseCase = () => TodoService.findAll();

export const createTodoUseCase = (newTodo: TodoCreateEncoded) =>
    pipe(newTodo, Schema.decodeEither(TodoCreate), Effect.flatMap(TodoService.create));

export const updateTodoUseCase = (id: number, updatedTodo: TodoCreateEncoded) =>
    pipe(
        updatedTodo,
        Schema.decodeEither(TodoCreate),
        Effect.flatMap((updatedTodo) => TodoService.update(id, updatedTodo)),
    );

export const deleteTodoUseCase = (id: number) =>
    pipe(
        id,
        Schema.decodeEither(Schema.Number),
        Effect.flatMap((id) => TodoService.delete(id)),
    );
