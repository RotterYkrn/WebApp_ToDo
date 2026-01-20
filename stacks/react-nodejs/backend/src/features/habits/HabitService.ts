import { Habit, HabitChunk, HabitCreate, HabitUpdate } from "@1day-todo/shared";
import { Effect, ParseResult } from "effect";

export interface IHabitService {
    readonly findAll: () => Effect.Effect<HabitChunk, ParseResult.ParseError>;
    readonly create: (todo: HabitCreate) => Effect.Effect<Habit, ParseResult.ParseError>;
    readonly update: (
        id: number,
        todo: HabitUpdate,
    ) => Effect.Effect<Habit, ParseResult.ParseError>;
    readonly delete: (id: number) => Effect.Effect<number, ParseResult.ParseError>;
}

export class HabitService extends Effect.Tag("HabitService")<HabitService, IHabitService>() {}
