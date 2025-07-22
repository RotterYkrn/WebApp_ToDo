import { Effect, pipe } from "effect";
import { FetchService, LoggerService } from "../services";
import { NetworkError, ParseJsonError } from "../errors";

export const httpRequest = (
    path: string,
    options: RequestInit
): Effect.Effect<Response, NetworkError, FetchService> => // RにHttpRequestServiceが追加された
    Effect.gen(function* (_) {
        const fetcherFn = yield* _(FetchService);

        const res = yield* _(Effect.tryPromise({
            try: () => fetcherFn(path, { ...options }), // fetcherFnを使用
            catch: (e) => new Error(`Network error during fetch: ${String(e)}`)
        }));

        if (!res.ok) {
            yield* _(Effect.fail(new Error(`HTTP error ${res.status}: ${path}`)));
        }

        return res;
    });

    
export const getHttpResponseObjectWithHandle = <T, S>(
    path: string,
    options: RequestInit,
    handleSuccess: (data: T) => Effect.Effect<S, never, LoggerService>,
    handleFailure: (e: NetworkError | ParseJsonError) => Effect.Effect<S, never, LoggerService>
) => pipe(
    httpRequest(path, { ...options, method: "GET" }),
    parseResponseJson<T>(),
    Effect.flatMap(handleSuccess),
    Effect.catchAll(handleFailure),
);

export const postHttpRequestWithHandle = (
    path: string,
    options: RequestInit,
    handleSuccess: () => Effect.Effect<void, never, LoggerService>,
    handleFailure: (e: NetworkError) => Effect.Effect<void, never, LoggerService>
) => pipe(
    httpRequest(path, { ...options, method: "POST" }),
    Effect.flatMap(handleSuccess),
    Effect.catchAll(handleFailure),
    );

export const parseResponseJson = <T>() =>
    <R>(resEffect: Effect.Effect<Response, NetworkError, R>): Effect.Effect<T, ParseJsonError, R> =>
        pipe(
            resEffect,
            Effect.flatMap((res) => Effect.tryPromise({
                try: () => res.json() as Promise<T>,
                catch: (e) => new Error(`JSON parsing failed: ${String(e)}`)
            })),
        );
