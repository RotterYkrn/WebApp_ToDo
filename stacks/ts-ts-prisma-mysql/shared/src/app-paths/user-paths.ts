type Id = number | string;

const API_USER_ROOT = "/api/users";
export const ApiUserPath = {
    ROOT: API_USER_ROOT,
    GET_ALL: API_USER_ROOT,
    CREATE: API_USER_ROOT,
    GET: (userId: Id): `${typeof API_USER_ROOT}/${Id}` => `${API_USER_ROOT}/${userId}`,
    UPDATE: (userId: Id): `${typeof API_USER_ROOT}/${Id}` => `${API_USER_ROOT}/${userId}`,
    DELETE: (userId: Id): `${typeof API_USER_ROOT}/${Id}` => `${API_USER_ROOT}/${userId}`,
} as const;

const API_USER_SETTING_ROOT = "/api/settings";
export const ApiUserSettingPath = {
    ROOT: API_USER_SETTING_ROOT,
    GET: API_USER_SETTING_ROOT,
    UPDATE: API_USER_SETTING_ROOT,
} as const;

const API_DAILY_PLAN_ROOT = "/api/daily-plans";
export const ApiDailyPlanPath = {
    ROOT: API_DAILY_PLAN_ROOT,
    GET_ALL: API_DAILY_PLAN_ROOT,
    CREATE: API_DAILY_PLAN_ROOT,
    GET: (itemId: Id): `${typeof API_DAILY_PLAN_ROOT}/${Id}` => `${API_DAILY_PLAN_ROOT}/${itemId}`,
    UPDATE: (itemId: Id): `${typeof API_DAILY_PLAN_ROOT}/${Id}` => `${API_DAILY_PLAN_ROOT}/${itemId}`,
    DELETE: (itemId: Id): `${typeof API_DAILY_PLAN_ROOT}/${Id}` => `${API_DAILY_PLAN_ROOT}/${itemId}`,
} as const;

const API_TODO_ROOT = "/api/todos";
export const ApiTodoPath = {
    ROOT: API_TODO_ROOT,
    GET_ALL: API_TODO_ROOT,
    CREATE: API_TODO_ROOT,
    GET: (itemId: Id): `${typeof API_TODO_ROOT}/${Id}` => `${API_TODO_ROOT}/${itemId}`,
    UPDATE: (itemId: Id): `${typeof API_TODO_ROOT}/${Id}` => `${API_TODO_ROOT}/${itemId}`,
    DELETE: (itemId: Id): `${typeof API_TODO_ROOT}/${Id}` => `${API_TODO_ROOT}/${itemId}`,
} as const;

const API_HABIT_ROOT = "/api/habits";
export const ApiHabitPath = {
    ROOT: API_HABIT_ROOT,
    GET_ALL: API_HABIT_ROOT,
    CREATE: API_HABIT_ROOT,
    GET: (itemId: Id): `${typeof API_HABIT_ROOT}/${Id}` => `${API_HABIT_ROOT}/${itemId}`,
    UPDATE: (itemId: Id): `${typeof API_HABIT_ROOT}/${Id}` => `${API_HABIT_ROOT}/${itemId}`,
    DELETE: (itemId: Id): `${typeof API_HABIT_ROOT}/${Id}` => `${API_HABIT_ROOT}/${itemId}`,
} as const;
