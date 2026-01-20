import { constants } from "http2";

import { Habit, HabitChunk } from "@1day-todo/shared";
import { Effect, Exit, Schema } from "effect";
import { Router } from "express";

import { HabitLive } from "@/features/habits/HabitLive.js";
import {
    createHabitUseCase,
    deleteHabitUseCase,
    getAllHabitsUseCase,
    updateHabitUseCase,
} from "@/features/habits/use-case.js";

const router = Router();

router.get("/", async (_req, res) => {
    const habitsExit = await Effect.runPromiseExit(
        getAllHabitsUseCase().pipe(Effect.provide(HabitLive)),
    );

    if (Exit.isFailure(habitsExit)) {
        console.error("Failed to get habits:", habitsExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.status(constants.HTTP_STATUS_OK).json(Schema.encodeSync(HabitChunk)(habitsExit.value));
});

router.post("/", async (req, res) => {
    const createdHabitExit = await Effect.runPromiseExit(
        createHabitUseCase(req.body).pipe(Effect.provide(HabitLive)),
    );

    if (Exit.isFailure(createdHabitExit)) {
        console.error("Failed to create habit:", createdHabitExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.status(constants.HTTP_STATUS_CREATED).json(
        Schema.encodeSync(Habit)(createdHabitExit.value),
    );
});

router.patch("/:id", async (req, res) => {
    const id = Number(req.params.id);

    const updatedHabitExit = await Effect.runPromiseExit(
        updateHabitUseCase(id, req.body).pipe(Effect.provide(HabitLive)),
    );

    if (Exit.isFailure(updatedHabitExit)) {
        console.error("Failed to update habit:", updatedHabitExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.status(constants.HTTP_STATUS_OK).json(Schema.encodeSync(Habit)(updatedHabitExit.value));
});

router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const deletedHabitExit = await Effect.runPromiseExit(
        deleteHabitUseCase(id).pipe(Effect.provide(HabitLive)),
    );

    if (Exit.isFailure(deletedHabitExit)) {
        console.error("Failed to delete habit:", deletedHabitExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.status(constants.HTTP_STATUS_OK).json(
        Schema.encodeSync(Schema.Number)(deletedHabitExit.value),
    );
});

export default router;
