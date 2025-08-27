import { Schema } from "effect";
import type { SchemaType } from "./utils.js";

export const ITask = {
  title: Schema.String,
  detail: Schema.String
};

export const TaskSchema_ = Schema.Struct(ITask);
export const TaskChunkSchema_ = Schema.Chunk(TaskSchema_);
export type Task_ = SchemaType<typeof TaskSchema_>;
export type TaskChunk_ = SchemaType<typeof TaskChunkSchema_>;

export const Task = {
  Schema: TaskSchema_,
  ChunkSchema: TaskChunkSchema_,
  Type: {} as Task_,
  ChunkType: {} as TaskChunk_
}

export const ITaskB = {
  title: Schema.String,
  detail: Schema.String,
  completed: Schema.Boolean
};

export const TaskSchemaB_ = Schema.Struct(ITaskB);
export const TaskChunkSchemaB_ = Schema.Chunk(TaskSchemaB_);
export type TaskB_ = SchemaType<typeof TaskSchemaB_>;
export type TaskChunkB_ = SchemaType<typeof TaskChunkSchemaB_>;

export const TaskB = {
  Schema: TaskSchemaB_,
  ChunkSchema: TaskChunkSchemaB_,
  Type: {} as TaskB_,
  ChunkType: {} as TaskChunkB_
};
