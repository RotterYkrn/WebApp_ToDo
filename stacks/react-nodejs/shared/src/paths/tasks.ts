import type { Id } from "./types.js";

const API_DAILY_PLAN_ROOT = "/api/daily-plans";
export const ApiDailyPlanPath = {
    ROOT: API_DAILY_PLAN_ROOT,
    GET_ALL: API_DAILY_PLAN_ROOT,
    CREATE: API_DAILY_PLAN_ROOT,
    GET: (itemId: Id = ":id"): `${typeof API_DAILY_PLAN_ROOT}/${Id}` => `${API_DAILY_PLAN_ROOT}/${itemId}`,
    UPDATE: (itemId: Id = ":id"): `${typeof API_DAILY_PLAN_ROOT}/${Id}` => `${API_DAILY_PLAN_ROOT}/${itemId}`,
    DELETE: (itemId: Id = ":id"): `${typeof API_DAILY_PLAN_ROOT}/${Id}` => `${API_DAILY_PLAN_ROOT}/${itemId}`,
} as const;

const API_TODO_ROOT = "/api/todos";
export const ApiTodoPath = {
    ROOT: API_TODO_ROOT,
    GET_ALL: API_TODO_ROOT,
    CREATE: API_TODO_ROOT,
    GET: (itemId: Id = ":id"): `${typeof API_TODO_ROOT}/${Id}` => `${API_TODO_ROOT}/${itemId}`,
    UPDATE: (itemId: Id = ":id"): `${typeof API_TODO_ROOT}/${Id}` => `${API_TODO_ROOT}/${itemId}`,
    DELETE: (itemId: Id = ":id"): `${typeof API_TODO_ROOT}/${Id}` => `${API_TODO_ROOT}/${itemId}`,
} as const;

const API_HABIT_ROOT = "/api/habits";
export const ApiHabitPath = {
    ROOT: API_HABIT_ROOT,
    GET_ALL: API_HABIT_ROOT,
    CREATE: API_HABIT_ROOT,
    GET: (itemId: Id = ":id"): `${typeof API_HABIT_ROOT}/${Id}` => `${API_HABIT_ROOT}/${itemId}`,
    UPDATE: (itemId: Id = ":id"): `${typeof API_HABIT_ROOT}/${Id}` => `${API_HABIT_ROOT}/${itemId}`,
    DELETE: (itemId: Id = ":id"): `${typeof API_HABIT_ROOT}/${Id}` => `${API_HABIT_ROOT}/${itemId}`,
} as const;