import { Effect } from "effect";
import { AppError } from "@/errors";

export interface IApiService {
    get: (path: string, options?: RequestInit) => Effect.Effect<Response, AppError>;
    post: (path: string, options?: RequestInit) => Effect.Effect<Response, AppError>;
}

export class ApiService extends Effect.Tag("ApiService")<
    ApiService,
    IApiService
    >() { };
