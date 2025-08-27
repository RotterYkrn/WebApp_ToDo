const API_AUTH_ROOT = "/api/auth";
export const ApiAuthPathLocal = {
    ROOT: API_AUTH_ROOT,
    SIGN_UP: "/sign-up",
    SIGN_IN: "/sign-in",
    SIGN_OUT: "/sign-out",
    CHECK_SESSION: "/check-session",
};
export const ApiAuthPathFull = {
    ROOT: API_AUTH_ROOT,
    SIGN_UP: `${API_AUTH_ROOT}${ApiAuthPathLocal.SIGN_UP}`,
    SIGN_IN: `${API_AUTH_ROOT}${ApiAuthPathLocal.SIGN_IN}`,
    SIGN_OUT: `${API_AUTH_ROOT}${ApiAuthPathLocal.SIGN_OUT}`,
    CHECK_SESSION: `${API_AUTH_ROOT}${ApiAuthPathLocal.CHECK_SESSION}`,
};
