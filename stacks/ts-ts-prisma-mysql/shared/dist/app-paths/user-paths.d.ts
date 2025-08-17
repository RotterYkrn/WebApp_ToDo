import type { Id } from "./types.js";
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
export {};
