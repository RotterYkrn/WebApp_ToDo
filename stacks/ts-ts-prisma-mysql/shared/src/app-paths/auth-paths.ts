const API_AUTH_ROOT = "/api/auth";
export const ApiAuthPath = {
    ROOT: API_AUTH_ROOT,
    SIGN_UP: `${API_AUTH_ROOT}/sign-up`,
    SIGN_IN: `${API_AUTH_ROOT}/sign-in`,
    SIGN_OUT: `${API_AUTH_ROOT}/sign-out`,
    CHECK_SESSION: `${API_AUTH_ROOT}/check-session`,
} as const;
