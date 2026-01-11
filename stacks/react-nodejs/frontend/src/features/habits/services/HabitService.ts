import { Habit, HabitChunk, HabitInput } from "@1day-todo/shared";
import { Effect } from "effect";

import { InternalServerError } from "@/errors";
import { ApiService } from "@/shared/http";

export interface IHabitService {
    readonly getAllHabitsApi: () => Effect.Effect<HabitChunk, InternalServerError, ApiService>;
    readonly createHabitApi: (
        newHabit: HabitInput,
    ) => Effect.Effect<Habit, InternalServerError, ApiService>;
    readonly updateHabitApi: (
        id: number,
        updatedHabit: HabitInput,
    ) => Effect.Effect<Habit, InternalServerError, ApiService>;
    readonly deleteHabitApi: (id: number) => Effect.Effect<number, InternalServerError, ApiService>;
}

export class HabitService extends Effect.Tag("HabitService")<HabitService, IHabitService>() {}
