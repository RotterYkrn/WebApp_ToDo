export declare enum TaskType {
    DAILY_PLAN = 0,
    TODO = 1,
    HABIT = 2
}
export declare const TaskSchemaMap: {
    0: {
        Schema: import("effect/Schema").Struct<{
            title: typeof import("effect/Schema").String;
            detail: typeof import("effect/Schema").String;
        }>;
        ChunkSchema: import("effect/Schema").Chunk<import("effect/Schema").Struct<{
            title: typeof import("effect/Schema").String;
            detail: typeof import("effect/Schema").String;
        }>>;
        Type: import("../schemas/task.js").Task_;
        ChunkType: import("../schemas/task.js").TaskChunk_;
    };
    1: {
        Schema: import("effect/Schema").Struct<{
            title: typeof import("effect/Schema").String;
            detail: typeof import("effect/Schema").String;
        }>;
        ChunkSchema: import("effect/Schema").Chunk<import("effect/Schema").Struct<{
            title: typeof import("effect/Schema").String;
            detail: typeof import("effect/Schema").String;
        }>>;
        Type: import("../schemas/task.js").Task_;
        ChunkType: import("../schemas/task.js").TaskChunk_;
    };
    2: {
        Schema: import("effect/Schema").Struct<{
            title: typeof import("effect/Schema").String;
            detail: typeof import("effect/Schema").String;
            completed: typeof import("effect/Schema").Boolean;
        }>;
        ChunkSchema: import("effect/Schema").Chunk<import("effect/Schema").Struct<{
            title: typeof import("effect/Schema").String;
            detail: typeof import("effect/Schema").String;
            completed: typeof import("effect/Schema").Boolean;
        }>>;
        Type: import("../schemas/task.js").TaskB_;
        ChunkType: import("../schemas/task.js").TaskChunkB_;
    };
};
export type TaskSchemaMap = typeof TaskSchemaMap;
export declare const TaskApiPathMap: {
    0: {
        readonly ROOT: "/api/daily-plans";
        readonly GET_ALL: "/api/daily-plans";
        readonly CREATE: "/api/daily-plans";
        readonly GET: (itemId: import("../paths/types.js").Id) => `${"/api/daily-plans"}/${import("../paths/types.js").Id}`;
        readonly UPDATE: (itemId: import("../paths/types.js").Id) => `${"/api/daily-plans"}/${import("../paths/types.js").Id}`;
        readonly DELETE: (itemId: import("../paths/types.js").Id) => `${"/api/daily-plans"}/${import("../paths/types.js").Id}`;
    };
    1: {
        readonly ROOT: "/api/todos";
        readonly GET_ALL: "/api/todos";
        readonly CREATE: "/api/todos";
        readonly GET: (itemId: import("../paths/types.js").Id) => `${"/api/todos"}/${import("../paths/types.js").Id}`;
        readonly UPDATE: (itemId: import("../paths/types.js").Id) => `${"/api/todos"}/${import("../paths/types.js").Id}`;
        readonly DELETE: (itemId: import("../paths/types.js").Id) => `${"/api/todos"}/${import("../paths/types.js").Id}`;
    };
    2: {
        readonly ROOT: "/api/habits";
        readonly GET_ALL: "/api/habits";
        readonly CREATE: "/api/habits";
        readonly GET: (itemId: import("../paths/types.js").Id) => `${"/api/habits"}/${import("../paths/types.js").Id}`;
        readonly UPDATE: (itemId: import("../paths/types.js").Id) => `${"/api/habits"}/${import("../paths/types.js").Id}`;
        readonly DELETE: (itemId: import("../paths/types.js").Id) => `${"/api/habits"}/${import("../paths/types.js").Id}`;
    };
};
export type TaskApiPathMap = typeof TaskApiPathMap;
