import { Habit, HabitChunk, HabitCreate, HabitUpdate } from "@1day-todo/shared";
import { Effect } from "effect";
import { ParseError } from "effect/ParseResult";

export interface IHabitService {
    readonly getAllHabitsFromDB: () => Effect.Effect<HabitChunk, ParseError>;
    readonly createHabitInDB: (todo: HabitCreate) => Effect.Effect<Habit, ParseError>;
    readonly updateHabitInDB: (id: number, todo: HabitUpdate) => Effect.Effect<Habit, ParseError>;
    readonly deleteHabitInDB: (id: number) => Effect.Effect<number, ParseError>;
}

export class HabitService extends Effect.Tag("HabitService")<HabitService, IHabitService>() {}
