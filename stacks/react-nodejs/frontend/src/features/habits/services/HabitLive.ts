import { ApiHabitPath, Habit, HabitChunk, HabitCreate, HabitUpdate } from "@1day-todo/shared";
import { Effect, Layer, pipe, Schema } from "effect";

import { HabitService } from "./HabitService";

import { InternalServerError } from "@/errors/types/features/DomainUtilError";
import { ApiService } from "@/shared/http/services/ApiService";
import { extractBodyWithSchema } from "@/shared/http/services/use-case";
import { HttpStatus } from "@/shared/http/types/HttpStatus";

export const HabitLive = Layer.succeed(
    HabitService,
    HabitService.of({
        getAllHabitsApi: () =>
            pipe(
                ApiService.get(ApiHabitPath.GET_ALL, HttpStatus.OK),
                Effect.flatMap(extractBodyWithSchema(HabitChunk)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to fetch habits",
                            cause: e,
                        }),
                ),
            ),

        createHabitApi: (newHabit: HabitCreate) =>
            pipe(
                newHabit,
                Schema.encodeEither(HabitCreate),
                Effect.flatMap((habit) =>
                    ApiService.post(ApiHabitPath.CREATE, HttpStatus.CREATED, { body: habit }),
                ),
                Effect.flatMap(extractBodyWithSchema(Habit)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to create habit",
                            cause: e,
                        }),
                ),
            ),

        updateHabitApi: (id: number, updatedHabit: HabitUpdate) =>
            pipe(
                updatedHabit,
                Schema.encodeEither(HabitUpdate),
                Effect.flatMap((habit) =>
                    ApiService.patch(`${ApiHabitPath.UPDATE(id)}`, HttpStatus.OK, {
                        body: habit,
                    }),
                ),
                Effect.flatMap(extractBodyWithSchema(Habit)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to update habit",
                            cause: e,
                        }),
                ),
            ),

        deleteHabitApi: (id: number) =>
            pipe(
                ApiService.delete(`${ApiHabitPath.DELETE(id)}`, HttpStatus.OK, { body: { id } }),
                Effect.flatMap(extractBodyWithSchema(Schema.Number)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to delete habit",
                            cause: e,
                        }),
                ),
            ),
    }),
);
