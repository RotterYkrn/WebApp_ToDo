import { HttpError, NetworkError, ResponseJsonError } from "@/errors";
import { Effect } from "effect";
import { PostOptionType } from "../types/api-types";
import { HttpStatus } from "../types/HttpStatus";

export interface IApiService {
    get: (
        path: string,
        expectedStatus: HttpStatus,
        options?: RequestInit
    ) => Effect.Effect<Response, NetworkError | HttpError>;
    post: (
        path: string,
        expectedStatus: HttpStatus,
        options?: PostOptionType
    ) => Effect.Effect<Response, NetworkError | HttpError>;
    extractBody: (
        res: Response
    ) => Effect.Effect<unknown, ResponseJsonError>;
}

export class ApiService extends Effect.Tag("ApiService")<
    ApiService,
    IApiService
    >() { };
