import { Schema } from "effect";
import type { SchemaType } from "./utils.js";

export const Todo = {
    id: Schema.Number,
    title: Schema.String,
    description: Schema.String
};
export type Todo = SchemaType<typeof Todo>;