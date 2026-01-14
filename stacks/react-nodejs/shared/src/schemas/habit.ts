import { Schema } from "effect";

import type { SchemaEncode, SchemaType } from "./utils.js";

export const Habit = Schema.Struct({
    id: Schema.Number,
    title: Schema.String,
    description: Schema.transform(Schema.NullOr(Schema.String), Schema.NullOr(Schema.String), {
        decode: (s) => (s === null || s === "" ? null : s),
        encode: (s) => s,
    }),
});
export type Habit = SchemaType<typeof Habit>;

export const HabitChunk = Schema.Chunk(Habit);
export type HabitChunk = SchemaType<typeof HabitChunk>;
export type HabitChunkEncoded = SchemaEncode<typeof HabitChunk>;

export const HabitCreate = Habit.pipe(Schema.omit("id"));
export type HabitCreate = SchemaType<typeof HabitCreate>;
export type HabitCreateEncoded = SchemaEncode<typeof HabitCreate>;

export const HabitUpdate = HabitCreate.pipe(Schema.partialWith({ exact: true }));
export type HabitUpdate = SchemaType<typeof HabitUpdate>;
export type HabitUpdateEncoded = SchemaEncode<typeof HabitUpdate>;
