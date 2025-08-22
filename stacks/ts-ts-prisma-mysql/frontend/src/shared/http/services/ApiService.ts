import { AppError } from "@/errors";
import { Effect } from "effect";
import { PostOptionType } from "../types/api-types";

export interface IApiService {
    get: (path: string, options?: RequestInit) => Effect.Effect<Response, AppError>;
    post: (path: string, options?: PostOptionType) => Effect.Effect<Response, AppError>;
}

export class ApiService extends Effect.Tag("ApiService")<
    ApiService,
    IApiService
    >() { };
