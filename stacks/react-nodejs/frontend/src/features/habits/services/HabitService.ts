import { Habit, HabitChunk, HabitCreate, HabitUpdate } from "@1day-todo/shared";
import { Effect } from "effect";

import { InternalServerError } from "@/errors";
import { ApiService } from "@/shared/http";

export interface IHabitService {
    readonly getAllHabitsApi: () => Effect.Effect<HabitChunk, InternalServerError, ApiService>;
    readonly createHabitApi: (
        newHabit: HabitCreate,
    ) => Effect.Effect<Habit, InternalServerError, ApiService>;
    readonly updateHabitApi: (
        id: number,
        updatedHabit: HabitUpdate,
    ) => Effect.Effect<Habit, InternalServerError, ApiService>;
    readonly deleteHabitApi: (id: number) => Effect.Effect<number, InternalServerError, ApiService>;
}

export class HabitService extends Effect.Tag("HabitService")<HabitService, IHabitService>() {}
