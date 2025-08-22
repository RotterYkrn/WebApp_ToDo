export declare enum TaskType {
    DAILY_PLAN = 0,
    TODO = 1,
    HABIT = 2
}
export interface Task {
    title: string;
    detail: string;
}
export type TaskResponseMap = {
    [TaskType.DAILY_PLAN]: Task;
    [TaskType.TODO]: Task;
    [TaskType.HABIT]: Task;
};
export declare const TaskApiPathMap: {
    0: {
        readonly ROOT: "/api/daily-plans";
        readonly GET_ALL: "/api/daily-plans";
        readonly CREATE: "/api/daily-plans";
        readonly GET: (itemId: import("../app-paths/types.js").Id) => `${"/api/daily-plans"}/${import("../app-paths/types.js").Id}`;
        readonly UPDATE: (itemId: import("../app-paths/types.js").Id) => `${"/api/daily-plans"}/${import("../app-paths/types.js").Id}`;
        readonly DELETE: (itemId: import("../app-paths/types.js").Id) => `${"/api/daily-plans"}/${import("../app-paths/types.js").Id}`;
    };
    1: {
        readonly ROOT: "/api/todos";
        readonly GET_ALL: "/api/todos";
        readonly CREATE: "/api/todos";
        readonly GET: (itemId: import("../app-paths/types.js").Id) => `${"/api/todos"}/${import("../app-paths/types.js").Id}`;
        readonly UPDATE: (itemId: import("../app-paths/types.js").Id) => `${"/api/todos"}/${import("../app-paths/types.js").Id}`;
        readonly DELETE: (itemId: import("../app-paths/types.js").Id) => `${"/api/todos"}/${import("../app-paths/types.js").Id}`;
    };
    2: {
        readonly ROOT: "/api/habits";
        readonly GET_ALL: "/api/habits";
        readonly CREATE: "/api/habits";
        readonly GET: (itemId: import("../app-paths/types.js").Id) => `${"/api/habits"}/${import("../app-paths/types.js").Id}`;
        readonly UPDATE: (itemId: import("../app-paths/types.js").Id) => `${"/api/habits"}/${import("../app-paths/types.js").Id}`;
        readonly DELETE: (itemId: import("../app-paths/types.js").Id) => `${"/api/habits"}/${import("../app-paths/types.js").Id}`;
    };
};
