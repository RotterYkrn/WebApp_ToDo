const API_USER_ROOT = "/api/users";
export const ApiUserPath = {
    ROOT: API_USER_ROOT,
    GET_ALL: API_USER_ROOT,
    CREATE: API_USER_ROOT,
    GET: (userId) => `${API_USER_ROOT}/${userId}`,
    UPDATE: (userId) => `${API_USER_ROOT}/${userId}`,
    DELETE: (userId) => `${API_USER_ROOT}/${userId}`,
};
const API_USER_SETTING_ROOT = "/api/settings";
export const ApiUserSettingPath = {
    ROOT: API_USER_SETTING_ROOT,
    GET: API_USER_SETTING_ROOT,
    UPDATE: API_USER_SETTING_ROOT,
};
