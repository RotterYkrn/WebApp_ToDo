import { Effect } from "effect";

import { PostOptionType } from "../types/api-types";
import { HttpStatus } from "../types/HttpStatus";

import { HttpError } from "@/errors/types/shared/HttpError";
import { NetworkError, ResponseJsonError } from "@/errors/types/shared/OtherError";

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
