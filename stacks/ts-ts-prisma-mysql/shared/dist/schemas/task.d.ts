import { Schema } from "effect";
import type { SchemaType } from "./utils.js";
export declare const ITask: {
    title: typeof Schema.String;
    detail: typeof Schema.String;
};
export declare const TaskSchema_: Schema.Struct<{
    title: typeof Schema.String;
    detail: typeof Schema.String;
}>;
export declare const TaskChunkSchema_: Schema.Chunk<Schema.Struct<{
    title: typeof Schema.String;
    detail: typeof Schema.String;
}>>;
export type Task_ = SchemaType<typeof TaskSchema_>;
export type TaskChunk_ = SchemaType<typeof TaskChunkSchema_>;
export declare const Task: {
    Schema: Schema.Struct<{
        title: typeof Schema.String;
        detail: typeof Schema.String;
    }>;
    ChunkSchema: Schema.Chunk<Schema.Struct<{
        title: typeof Schema.String;
        detail: typeof Schema.String;
    }>>;
    Type: Task_;
    ChunkType: TaskChunk_;
};
export declare const ITaskB: {
    title: typeof Schema.String;
    detail: typeof Schema.String;
    completed: typeof Schema.Boolean;
};
export declare const TaskSchemaB_: Schema.Struct<{
    title: typeof Schema.String;
    detail: typeof Schema.String;
    completed: typeof Schema.Boolean;
}>;
export declare const TaskChunkSchemaB_: Schema.Chunk<Schema.Struct<{
    title: typeof Schema.String;
    detail: typeof Schema.String;
    completed: typeof Schema.Boolean;
}>>;
export type TaskB_ = SchemaType<typeof TaskSchemaB_>;
export type TaskChunkB_ = SchemaType<typeof TaskChunkSchemaB_>;
export declare const TaskB: {
    Schema: Schema.Struct<{
        title: typeof Schema.String;
        detail: typeof Schema.String;
        completed: typeof Schema.Boolean;
    }>;
    ChunkSchema: Schema.Chunk<Schema.Struct<{
        title: typeof Schema.String;
        detail: typeof Schema.String;
        completed: typeof Schema.Boolean;
    }>>;
    Type: TaskB_;
    ChunkType: TaskChunkB_;
};
