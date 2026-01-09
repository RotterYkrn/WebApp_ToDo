import { Habit, HabitChunk, HabitInput } from "@1day-todo/shared";
import { Effect, pipe } from "effect";

import { HabitService } from "./HabitService";

import { TaskUnknownError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";

export const getAllHabitsUseCase = (): Effect.Effect<
    HabitChunk,
    TaskUnknownError,
    HabitService | ApiService
> =>
    pipe(
        HabitService.getAllHabitsApi(),
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while fetching habits.",
                originalError: e,
            });
        }),
    );

export const createHabitUseCase = (
    newHabit: HabitInput,
): Effect.Effect<Habit, TaskUnknownError, HabitService | ApiService> =>
    pipe(
        newHabit,
        parseToSchema(HabitInput),
        Effect.flatMap(HabitService.createHabitApi),
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while creating a habit.",
                originalError: e,
            });
        }),
    );

export const updateHabitUseCase = (
    id: number,
    updatedHabit: {
        title?: string;
        description?: string | null;
    },
): Effect.Effect<Habit, TaskUnknownError, HabitService | ApiService> =>
    pipe(
        updatedHabit,
        parseToSchema(HabitInput),
        Effect.flatMap((updatedHabit) => HabitService.updateHabitApi(id, updatedHabit)),
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while updating a habit.",
                originalError: e,
            });
        }),
    );

export const deleteHabitUseCase = (
    id: number,
): Effect.Effect<number, TaskUnknownError, HabitService | ApiService> =>
    pipe(
        id,
        HabitService.deleteHabitApi,
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while deleting a habit.",
                originalError: e,
            });
        }),
    );
