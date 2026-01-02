import { SharedError } from "@/errors";
import { ApiService } from "@/shared/http";
import { Habit, HabitChunk, HabitInput } from "@1day-todo/shared";
import { Effect } from "effect";

export interface IHabitService {
    readonly getAllHabitsApi: () =>
        Effect.Effect<HabitChunk, SharedError, ApiService>;
    readonly createHabitApi: (newHabit: HabitInput) =>
        Effect.Effect<Habit, SharedError, ApiService>;
    readonly updateHabitApi: (id: number, updatedHabit: HabitInput) =>
        Effect.Effect<Habit, SharedError, ApiService>;
    readonly deleteHabitApi: (id: number) =>
        Effect.Effect<number, SharedError, ApiService>;
}

export class HabitService extends Effect.Tag("HabitService")<
    HabitService,
    IHabitService
  >() { };
