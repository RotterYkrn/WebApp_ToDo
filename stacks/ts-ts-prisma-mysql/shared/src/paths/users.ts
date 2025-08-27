import type { Id } from "./types.js";

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
