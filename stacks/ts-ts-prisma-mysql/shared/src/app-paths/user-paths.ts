type Id = number | string;

export const ApiUserPath = {
    GET_ALL: "/api/users",
    CREATE: "/api/users",
    GET: (userId: Id): `/api/users/${Id}` => `/api/users/${userId}`,
    UPDATE: (userId: Id): `/api/users/${Id}` => `/api/users/${userId}`,
    DELETE: (userId: Id): `/api/users/${Id}` => `/api/users/${userId}`,
} as const;

export const ApiUserSettingPath = {
    GET: "/api/settings",
    UPDATE: "/api/settings",
} as const;

export const ApiDailyPlanPath = {
    GET_ALL: "/api/daily-plans",
    CREATE: "/api/daily-plans",
    GET: (itemId: Id): `/api/daily-plans/${Id}` => `/api/daily-plans/${itemId}`,
    UPDATE: (itemId: Id): `/api/daily-plans/${Id}` => `/api/daily-plans/${itemId}`,
    DELETE: (itemId: Id): `/api/daily-plans/${Id}` => `/api/daily-plans/${itemId}`,
} as const;

export const ApiTodoPath = {
    GET_ALL: "/api/todos",
    CREATE: "/api/todos",
    GET: (itemId: Id): `/api/todos/${Id}` => `/api/todos/${itemId}`,
    UPDATE: (itemId: Id): `/api/todos/${Id}` => `/api/todos/${itemId}`,
    DELETE: (itemId: Id): `/api/todos/${Id}` => `/api/todos/${itemId}`,
} as const;

export const ApiHabitPath = {
  GET_ALL: "/api/habits",
  CREATE: "/api/habits",
  GET: (itemId: Id): `/api/habits/${Id}` => `/api/habits/${itemId}`,
  UPDATE: (itemId: Id): `/api/habits/${Id}` => `/api/habits/${itemId}`,
  DELETE: (itemId: Id): `/api/habits/${Id}` => `/api/habits/${itemId}`,
}
