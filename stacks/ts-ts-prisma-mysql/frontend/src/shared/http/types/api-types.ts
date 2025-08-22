export type PostOptionType = {
    body?: unknown;
    options?: Omit<RequestInit, "body">;
};
