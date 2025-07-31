import { NetworkError } from "@/core/errors";
import { Effect } from "effect";

export interface Api {
    get: (path: string, options?: RequestInit) => Effect.Effect<Response, NetworkError>;
    post: (path: string, options?: RequestInit) => Effect.Effect<Response, NetworkError>;
}

export class ApiService extends Effect.Tag("ApiService")<
    ApiService,
    Api
    >() { };
