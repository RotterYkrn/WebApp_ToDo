import { Effect } from "effect";

import { PostOptionType } from "../types/api-types";
import { HttpStatus } from "../types/HttpStatus";

import { HttpError, NetworkError, ResponseJsonError } from "@/errors";

export interface IApiService {
    readonly get: (
        path: string,
        expectedStatus: HttpStatus,
        options?: RequestInit,
    ) => Effect.Effect<Response, NetworkError | HttpError>;

    readonly post: (
        path: string,
        expectedStatus: HttpStatus,
        options?: PostOptionType,
    ) => Effect.Effect<Response, NetworkError | HttpError>;

    readonly patch: (
        path: string,
        expectedStatus: HttpStatus,
        options?: PostOptionType,
    ) => Effect.Effect<Response, NetworkError | HttpError>;

    readonly delete: (
        path: string,
        expectedStatus: HttpStatus,
        options?: PostOptionType,
    ) => Effect.Effect<Response, NetworkError | HttpError>;

    readonly extractBody: (res: Response) => Effect.Effect<unknown, ResponseJsonError>;
}

export class ApiService extends Effect.Tag("ApiService")<ApiService, IApiService>() {}
