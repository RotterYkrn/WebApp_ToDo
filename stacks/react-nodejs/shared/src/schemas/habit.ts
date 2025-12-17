import { Schema } from "effect";
import type { SchemaType } from "./utils.js";

export const Habit = {
    id: Schema.Number,
    title: Schema.String,
    description: Schema.String
};
export type Habit = SchemaType<typeof Habit>;
