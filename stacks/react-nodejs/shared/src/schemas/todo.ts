import { Schema } from "effect";
import type { SchemaType } from "./utils.js";

export const Todo = Schema.Struct({
    id: Schema.Number,
    title: Schema.String,
    description: Schema.NullOr(Schema.String),
});
export type Todo = SchemaType<typeof Todo>;

export const TodoChunk = Schema.Chunk(Todo);
export type TodoChunk = SchemaType<typeof TodoChunk>;

export const TodoInput = Todo.pipe(
    Schema.partial,
    Schema.omit("id"),
)
export type TodoInput = SchemaType<typeof TodoInput>;
type TodoParams = SchemaType<typeof TodoInput>;
