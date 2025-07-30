import { NetworkError } from "@/core/errors";
import { Context, Effect } from "effect";

export interface Api {
    get: (path: string, options?: RequestInit) => Effect.Effect<Response, NetworkError>;
    post: (path: string, options?: RequestInit) => Effect.Effect<Response, NetworkError>;
}

export class ApiService extends Context.Tag("ApiService")<
    ApiService,
    Api
    >() { };
