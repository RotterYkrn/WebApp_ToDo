export const HttpStatus = {
    // 2xx
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,

    // 4xx
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,

    // 5xx
    INTERNAL_SERVER_ERROR: 500,
} as const;

export type HttpStatus = typeof HttpStatus[keyof typeof HttpStatus];
