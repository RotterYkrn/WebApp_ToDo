import { TodoCreate, TodoCreateEncoded } from "@1day-todo/shared";
import { Effect, pipe, Schema } from "effect";

import { TodoService } from "./TodoService.js";

export const getAllTodosUseCase = () => TodoService.getAllTodosFromDB();

export const createTodoUseCase = (newTodo: TodoCreateEncoded) =>
    pipe(newTodo, Schema.decodeEither(TodoCreate), Effect.flatMap(TodoService.createTodoInDB));

export const updateTodoUseCase = (id: number, updatedTodo: TodoCreateEncoded) =>
    pipe(
        updatedTodo,
        Schema.decodeEither(TodoCreate),
        Effect.flatMap((updatedTodo) => TodoService.updateTodoInDB(id, updatedTodo)),
    );

export const deleteTodoUseCase = (id: number) =>
    pipe(
        id,
        Schema.decodeEither(Schema.Number),
        Effect.flatMap((id) => TodoService.deleteTodoInDB(id)),
    );
