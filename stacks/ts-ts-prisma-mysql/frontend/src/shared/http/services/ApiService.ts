import { Effect } from "effect";
import { AppError } from "@/errors";

export interface Api {
    get: (path: string, options?: RequestInit) => Effect.Effect<Response, AppError>;
    post: (path: string, options?: RequestInit) => Effect.Effect<Response, AppError>;
}

export class ApiService extends Effect.Tag("ApiService")<
    ApiService,
    Api
    >() { };
