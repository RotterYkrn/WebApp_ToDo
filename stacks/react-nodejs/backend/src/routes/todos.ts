import { constants } from "http2";

import { Todo, TodoChunk } from "@1day-todo/shared";
import { Effect, Exit, Schema } from "effect";
import { Router } from "express";

import { TodoLive } from "@/features/todos/TodoLive.js";
import {
    createTodoUseCase,
    deleteTodoUseCase,
    getAllTodosUseCase,
    updateTodoUseCase,
} from "@/features/todos/use-case.js";

const router = Router();

router.get("/", async (_req, res) => {
    const todosExit = await Effect.runPromiseExit(
        getAllTodosUseCase().pipe(Effect.provide(TodoLive)),
    );

    if (Exit.isFailure(todosExit)) {
        console.error("Failed to get todos:", todosExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.status(constants.HTTP_STATUS_OK).json(Schema.encodeSync(TodoChunk)(todosExit.value));
});

router.post("/", async (req, res) => {
    const createdTodoExit = await Effect.runPromiseExit(
        createTodoUseCase(req.body).pipe(Effect.provide(TodoLive)),
    );

    if (Exit.isFailure(createdTodoExit)) {
        console.error("Failed to create todo:", createdTodoExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.status(constants.HTTP_STATUS_CREATED).json(Schema.encodeSync(Todo)(createdTodoExit.value));
});

router.patch("/:id", async (req, res) => {
    const id = Number(req.params.id);

    const updatedTodoExit = await Effect.runPromiseExit(
        updateTodoUseCase(id, req.body).pipe(Effect.provide(TodoLive)),
    );

    if (Exit.isFailure(updatedTodoExit)) {
        console.error("Failed to update todo:", updatedTodoExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.status(constants.HTTP_STATUS_OK).json(Schema.encodeSync(Todo)(updatedTodoExit.value));
});

router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const deletedTodoExit = await Effect.runPromiseExit(
        deleteTodoUseCase(id).pipe(Effect.provide(TodoLive)),
    );

    if (Exit.isFailure(deletedTodoExit)) {
        console.error("Failed to delete todo:", deletedTodoExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.status(constants.HTTP_STATUS_OK).json(
        Schema.encodeSync(Schema.Number)(deletedTodoExit.value),
    );
});

export default router;
