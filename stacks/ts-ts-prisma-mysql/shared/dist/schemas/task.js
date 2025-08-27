import { Schema } from "effect";
export const ITask = {
    title: Schema.String,
    detail: Schema.String
};
export const TaskSchema_ = Schema.Struct(ITask);
export const TaskChunkSchema_ = Schema.Chunk(TaskSchema_);
export const Task = {
    Schema: TaskSchema_,
    ChunkSchema: TaskChunkSchema_,
    Type: {},
    ChunkType: {}
};
export const ITaskB = {
    title: Schema.String,
    detail: Schema.String,
    completed: Schema.Boolean
};
export const TaskSchemaB_ = Schema.Struct(ITaskB);
export const TaskChunkSchemaB_ = Schema.Chunk(TaskSchemaB_);
export const TaskB = {
    Schema: TaskSchemaB_,
    ChunkSchema: TaskChunkSchemaB_,
    Type: {},
    ChunkType: {}
};
