import { TaskUnknownError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { Todo, TodoChunk, TodoInput } from "@1day-todo/shared";
import { Effect, pipe } from "effect";
import { TodoService } from "./TodoService";

export const getAllTodosUseCase = (): Effect.Effect<TodoChunk, TaskUnknownError, TodoService | ApiService> =>
    pipe(
        TodoService.getAllTodosApi(),
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while fetching todos.",
                originalError: e,
            });
        }),
    );

export const createTodoUseCase = (
    newTodo: TodoInput
): Effect.Effect<Todo, TaskUnknownError, TodoService | ApiService> =>
    pipe(
        newTodo,
        parseToSchema(TodoInput),
        Effect.flatMap(TodoService.createTodoApi),
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while creating a todo.",
                originalError: e,
            });
        }),
    );

export const updateTodoUseCase = (id: number, updatedTodo: {
    title?: string;
    description?: string | null;
}): Effect.Effect<Todo, TaskUnknownError, TodoService | ApiService> =>
    pipe(
        updatedTodo,
        parseToSchema(TodoInput),
        Effect.flatMap((updatedTodo) => TodoService.updateTodoApi(id, updatedTodo)),
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while updating a todo.",
                originalError: e,
            });
        }),
    );

export const deleteTodoUseCase = (id: number): Effect.Effect<number, TaskUnknownError, TodoService | ApiService> =>
    pipe(
        id,
        TodoService.deleteTodoApi,
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while deleting a todo.",
                originalError: e,
            });
        }),
    );
