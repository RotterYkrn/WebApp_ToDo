export const UserPath = {
    GET_ALL: "/api/users",
    CREATE: "/api/users",
    GET: (userId) => `/api/users/${userId}`,
    UPDATE: (userId) => `/api/users/${userId}`,
    DELETE: (userId) => `/api/users/${userId}`,
};
export const UserSettingPath = {
    GET: "/api/settings",
    UPDATE: "/api/settings",
};
export const DailyPlanPath = {
    GET_ALL: "/api/daily-plans",
    CREATE: "/api/daily-plans",
    GET: (itemId) => `/api/daily-plans/${itemId}`,
    UPDATE: (itemId) => `/api/daily-plans/${itemId}`,
    DELETE: (itemId) => `/api/daily-plans/${itemId}`,
};
export const TodoPath = {
    GET_ALL: "/api/todos",
    CREATE: "/api/todos",
    GET: (itemId) => `/api/todos/${itemId}`,
    UPDATE: (itemId) => `/api/todos/${itemId}`,
    DELETE: (itemId) => `/api/todos/${itemId}`,
};
export const HabitPath = {
    GET_ALL: "/api/habits",
    CREATE: "/api/habits",
    GET: (itemId) => `/api/habits/${itemId}`,
    UPDATE: (itemId) => `/api/habits/${itemId}`,
    DELETE: (itemId) => `/api/habits/${itemId}`,
};
