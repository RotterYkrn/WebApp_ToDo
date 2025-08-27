import type { Id } from "./types.js";
declare const API_DAILY_PLAN_ROOT = "/api/daily-plans";
export declare const ApiDailyPlanPath: {
    readonly ROOT: "/api/daily-plans";
    readonly GET_ALL: "/api/daily-plans";
    readonly CREATE: "/api/daily-plans";
    readonly GET: (itemId: Id) => `${typeof API_DAILY_PLAN_ROOT}/${Id}`;
    readonly UPDATE: (itemId: Id) => `${typeof API_DAILY_PLAN_ROOT}/${Id}`;
    readonly DELETE: (itemId: Id) => `${typeof API_DAILY_PLAN_ROOT}/${Id}`;
};
declare const API_TODO_ROOT = "/api/todos";
export declare const ApiTodoPath: {
    readonly ROOT: "/api/todos";
    readonly GET_ALL: "/api/todos";
    readonly CREATE: "/api/todos";
    readonly GET: (itemId: Id) => `${typeof API_TODO_ROOT}/${Id}`;
    readonly UPDATE: (itemId: Id) => `${typeof API_TODO_ROOT}/${Id}`;
    readonly DELETE: (itemId: Id) => `${typeof API_TODO_ROOT}/${Id}`;
};
declare const API_HABIT_ROOT = "/api/habits";
export declare const ApiHabitPath: {
    readonly ROOT: "/api/habits";
    readonly GET_ALL: "/api/habits";
    readonly CREATE: "/api/habits";
    readonly GET: (itemId: Id) => `${typeof API_HABIT_ROOT}/${Id}`;
    readonly UPDATE: (itemId: Id) => `${typeof API_HABIT_ROOT}/${Id}`;
    readonly DELETE: (itemId: Id) => `${typeof API_HABIT_ROOT}/${Id}`;
};
export {};
