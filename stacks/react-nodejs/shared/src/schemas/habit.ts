import { Schema } from "effect";

import type { SchemaType } from "./utils.js";

export const Habit = Schema.Struct({
    id: Schema.Number,
    title: Schema.String,
    description: Schema.NullOr(Schema.String),
});
export type Habit = SchemaType<typeof Habit>;

export const HabitChunk = Schema.Chunk(Habit);
export type HabitChunk = SchemaType<typeof HabitChunk>;

export const HabitInput = Habit.pipe(Schema.partial, Schema.omit("id"));
export type HabitInput = SchemaType<typeof HabitInput>;
