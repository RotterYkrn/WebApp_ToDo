import { HabitCreate, HabitCreateEncoded } from "@1day-todo/shared";
import { Effect, pipe, Schema } from "effect";

import { HabitService } from "./HabitService.js";

export const getAllHabitsUseCase = () => HabitService.findAll();

export const createHabitUseCase = (newHabit: HabitCreateEncoded) =>
    pipe(newHabit, Schema.decodeEither(HabitCreate), Effect.flatMap(HabitService.create));

export const updateHabitUseCase = (id: number, updatedHabit: HabitCreateEncoded) =>
    pipe(
        updatedHabit,
        Schema.decodeEither(HabitCreate),
        Effect.flatMap((updatedHabit) => HabitService.update(id, updatedHabit)),
    );

export const deleteHabitUseCase = (id: number) =>
    pipe(
        id,
        Schema.decodeEither(Schema.Number),
        Effect.flatMap((id) => HabitService.delete(id)),
    );
