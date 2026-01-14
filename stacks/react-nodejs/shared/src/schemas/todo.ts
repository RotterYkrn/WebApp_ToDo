import { Schema } from "effect";

import type { SchemaEncode, SchemaType } from "./utils.js";

export const Todo = Schema.Struct({
    id: Schema.Number,
    title: Schema.String,
    description: Schema.transform(Schema.NullOr(Schema.String), Schema.NullOr(Schema.String), {
        decode: (s) => (s === null || s === "" ? null : s),
        encode: (s) => s,
    }),
});
export type Todo = SchemaType<typeof Todo>;
export type TodoEncoded = SchemaEncode<typeof Todo>;

export const TodoChunk = Schema.Chunk(Todo);
export type TodoChunk = SchemaType<typeof TodoChunk>;
export type TodoChunkEncoded = SchemaEncode<typeof TodoChunk>;

export const TodoCreate = Todo.pipe(Schema.omit("id"));
export type TodoCreate = SchemaType<typeof TodoCreate>;
export type TodoCreateEncoded = SchemaEncode<typeof TodoCreate>;

export const TodoUpdate = TodoCreate.pipe(Schema.partialWith({ exact: true }));
export type TodoUpdate = SchemaType<typeof TodoUpdate>;
export type TodoUpdateEncoded = SchemaEncode<typeof TodoUpdate>;
