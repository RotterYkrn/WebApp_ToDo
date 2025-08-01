import { Effect } from "effect";
import { ApiError } from "@/core/errors";

export interface Api {
    get: (path: string, options?: RequestInit) => Effect.Effect<Response, ApiError>;
    post: (path: string, options?: RequestInit) => Effect.Effect<Response, ApiError>;
}

export class ApiService extends Effect.Tag("ApiService")<
    ApiService,
    Api
    >() { };
