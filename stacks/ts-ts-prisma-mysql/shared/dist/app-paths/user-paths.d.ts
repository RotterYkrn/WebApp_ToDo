type Id = number | string;
declare const API_USER_ROOT = "/api/users";
export declare const ApiUserPath: {
    readonly ROOT: "/api/users";
    readonly GET_ALL: "/api/users";
    readonly CREATE: "/api/users";
    readonly GET: (userId: Id) => `${typeof API_USER_ROOT}/${Id}`;
    readonly UPDATE: (userId: Id) => `${typeof API_USER_ROOT}/${Id}`;
    readonly DELETE: (userId: Id) => `${typeof API_USER_ROOT}/${Id}`;
};
export declare const ApiUserSettingPath: {
    readonly ROOT: "/api/settings";
    readonly GET: "/api/settings";
    readonly UPDATE: "/api/settings";
};
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
