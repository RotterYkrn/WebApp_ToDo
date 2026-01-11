import { Habit, HabitChunk, HabitInput } from "@1day-todo/shared";
import { Effect, pipe, Schema } from "effect";

import { HabitService } from "./HabitService";

import { InternalServerError, ValidationError } from "@/errors";
import { ApiService } from "@/shared/http";

export const getAllHabitsUseCase = (): Effect.Effect<
    HabitChunk,
    InternalServerError,
    HabitService | ApiService
> =>
    pipe(
        HabitService.getAllHabitsApi(),
        Effect.mapError((e) => e),
    );

export const createHabitUseCase = (
    newHabit: HabitInput,
): Effect.Effect<Habit, ValidationError | InternalServerError, HabitService | ApiService> =>
    pipe(
        newHabit,
        Schema.decodeUnknownEither(HabitInput),
        Effect.flatMap(HabitService.createHabitApi),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "ParseError":
                    return new ValidationError({
                        message: "Invalid habit data format.",
                        originalError: e,
                    });
                default:
                    return e;
            }
        }),
    );

export const updateHabitUseCase = (
    id: number,
    updatedHabit: {
        title?: string;
        description?: string | null;
    },
): Effect.Effect<Habit, ValidationError | InternalServerError, HabitService | ApiService> =>
    pipe(
        updatedHabit,
        Schema.decodeUnknownEither(HabitInput),
        Effect.flatMap((updatedHabit) => HabitService.updateHabitApi(id, updatedHabit)),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "ParseError":
                    return new ValidationError({
                        message: "Invalid habit data format.",
                        originalError: e,
                    });
                default:
                    return e;
            }
        }),
    );

export const deleteHabitUseCase = (
    id: number,
): Effect.Effect<number, InternalServerError, HabitService | ApiService> =>
    pipe(
        id,
        HabitService.deleteHabitApi,
        Effect.mapError((e) => e),
    );
