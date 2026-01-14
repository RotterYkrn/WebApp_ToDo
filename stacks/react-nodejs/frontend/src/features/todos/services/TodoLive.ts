import { ApiTodoPath, Todo, TodoChunk, TodoCreate, TodoUpdate } from "@1day-todo/shared";
import { Effect, Layer, pipe, Schema } from "effect";

import { TodoService } from "./TodoService";

import { InternalServerError } from "@/errors";
import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";

export const TodoLive = Layer.succeed(
    TodoService,
    TodoService.of({
        getAllTodosApi: () =>
            pipe(
                ApiService.get(ApiTodoPath.GET_ALL, HttpStatus.OK),
                Effect.flatMap(extractBodyWithSchema(TodoChunk)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to fetch todos",
                            cause: e,
                        }),
                ),
            ),

        createTodoApi: (newTodo: TodoCreate) =>
            pipe(
                ApiService.post(ApiTodoPath.CREATE, HttpStatus.CREATED, { body: newTodo }),
                Effect.flatMap(extractBodyWithSchema(Todo)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to create todo",
                            cause: e,
                        }),
                ),
            ),

        updateTodoApi: (id: number, updatedTodo: TodoUpdate) =>
            pipe(
                ApiService.patch(`${ApiTodoPath.UPDATE(id)}`, HttpStatus.OK, { body: updatedTodo }),
                Effect.flatMap(extractBodyWithSchema(Todo)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to update todo",
                            cause: e,
                        }),
                ),
            ),

        deleteTodoApi: (id: number) =>
            pipe(
                ApiService.delete(`${ApiTodoPath.DELETE(id)}`, HttpStatus.OK, { body: { id } }),
                Effect.flatMap(extractBodyWithSchema(Schema.Number)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to delete todo",
                            cause: e,
                        }),
                ),
            ),
    }),
);
