import { ApiHabitPath, Habit, HabitChunk, HabitInput } from "@1day-todo/shared";
import { Effect, Layer, pipe, Schema } from "effect";

import { HabitService } from "./HabitService";

import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";

export const HabitLive = Layer.succeed(
    HabitService,
    HabitService.of({
        getAllHabitsApi: () =>
            pipe(
                ApiService.get(ApiHabitPath.GET_ALL, HttpStatus.OK),
                Effect.flatMap(extractBodyWithSchema(HabitChunk)),
            ),

        createHabitApi: (newHabit: HabitInput) =>
            pipe(
                ApiService.post(ApiHabitPath.CREATE, HttpStatus.CREATED, { body: newHabit }),
                Effect.flatMap(extractBodyWithSchema(Habit)),
            ),

        updateHabitApi: (id: number, updatedHabit: HabitInput) =>
            pipe(
                ApiService.patch(`${ApiHabitPath.UPDATE(id)}`, HttpStatus.OK, {
                    body: updatedHabit,
                }),
                Effect.flatMap(extractBodyWithSchema(Habit)),
            ),

        deleteHabitApi: (id: number) =>
            pipe(
                ApiService.delete(`${ApiHabitPath.DELETE(id)}`, HttpStatus.OK, { body: { id } }),
                Effect.flatMap(extractBodyWithSchema(Schema.Number)),
            ),
    }),
);
