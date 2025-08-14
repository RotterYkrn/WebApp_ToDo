type Id = number | string;
export declare const UserPath: {
    readonly GET_ALL: "/api/users";
    readonly CREATE: "/api/users";
    readonly GET: (userId: Id) => `/api/users/${Id}`;
    readonly UPDATE: (userId: Id) => `/api/users/${Id}`;
    readonly DELETE: (userId: Id) => `/api/users/${Id}`;
};
export declare const UserSettingPath: {
    readonly GET: "/api/settings";
    readonly UPDATE: "/api/settings";
};
export declare const DailyPlanPath: {
    readonly GET_ALL: "/api/daily-plans";
    readonly CREATE: "/api/daily-plans";
    readonly GET: (itemId: Id) => `/api/daily-plans/${Id}`;
    readonly UPDATE: (itemId: Id) => `/api/daily-plans/${Id}`;
    readonly DELETE: (itemId: Id) => `/api/daily-plans/${Id}`;
};
export declare const TodoPath: {
    readonly GET_ALL: "/api/todos";
    readonly CREATE: "/api/todos";
    readonly GET: (itemId: Id) => `/api/todos/${Id}`;
    readonly UPDATE: (itemId: Id) => `/api/todos/${Id}`;
    readonly DELETE: (itemId: Id) => `/api/todos/${Id}`;
};
export declare const HabitPath: {
    GET_ALL: string;
    CREATE: string;
    GET: (itemId: Id) => `/api/habits/${Id}`;
    UPDATE: (itemId: Id) => `/api/habits/${Id}`;
    DELETE: (itemId: Id) => `/api/habits/${Id}`;
};
export {};
