import { AppError } from "@/errors";
import { Effect } from "effect";
import { PostOptionType } from "../types/api-types";
import { HttpStatus } from "../types/HttpStatus";

export interface IApiService {
    get: (path: string, expectedStatus: HttpStatus, options?: RequestInit) => Effect.Effect<Response, AppError>;
    post: (path: string, expectedStatus: HttpStatus, options?: PostOptionType) => Effect.Effect<Response, AppError>;
}

export class ApiService extends Effect.Tag("ApiService")<
    ApiService,
    IApiService
    >() { };
