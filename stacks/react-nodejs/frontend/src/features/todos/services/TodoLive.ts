import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";
import { ApiTodoPath, Todo, TodoChunk, TodoInput } from "@1day-todo/shared";
import { Effect, Layer, pipe, Schema } from "effect";
import { TodoService } from "./TodoService";

export const TodoLive = Layer.succeed(TodoService, TodoService.of({
    getAllTodosApi: () => pipe(
        ApiService.get(
            ApiTodoPath.GET_ALL,
            HttpStatus.OK,
        ),
        Effect.flatMap(extractBodyWithSchema(TodoChunk)),
    ),

    createTodoApi: (newTodo: TodoInput) => pipe(
        ApiService.post(
            ApiTodoPath.CREATE,
            HttpStatus.CREATED,
            { body: newTodo },
        ),
        Effect.flatMap(extractBodyWithSchema(Todo)),
    ),

    updateTodoApi: (id: number, updatedTodo: TodoInput) => pipe(
        ApiService.patch(
            `${ApiTodoPath.UPDATE(id)}`,
            HttpStatus.OK,
            { body: updatedTodo },
        ),
        Effect.flatMap(extractBodyWithSchema(Todo)),
    ),

    deleteTodoApi: (id: number) => pipe(
        ApiService.delete(
            `${ApiTodoPath.DELETE(id)}`,
            HttpStatus.OK,
            { body: { id } },
        ),
        Effect.flatMap(extractBodyWithSchema(Schema.Number)),
    ),
}));