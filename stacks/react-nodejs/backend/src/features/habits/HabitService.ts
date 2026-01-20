import { Habit, HabitChunk, HabitCreate, HabitUpdate } from "@1day-todo/shared";
import { Effect } from "effect";
import { ParseError } from "effect/ParseResult";

export interface IHabitService {
    readonly findAll: () => Effect.Effect<HabitChunk, ParseError>;
    readonly create: (todo: HabitCreate) => Effect.Effect<Habit, ParseError>;
    readonly update: (id: number, todo: HabitUpdate) => Effect.Effect<Habit, ParseError>;
    readonly delete: (id: number) => Effect.Effect<number, ParseError>;
}

export class HabitService extends Effect.Tag("HabitService")<HabitService, IHabitService>() {}
