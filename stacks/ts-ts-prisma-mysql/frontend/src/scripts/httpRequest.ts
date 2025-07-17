import { Effect, Context, Layer, pipe } from "effect";

type FetchFn = typeof fetch;

class FetchService extends Context.Tag("FetchService")<
    FetchService,
    FetchFn
    >() { };

type HttpRequestServices = FetchService;
const HttpRequestLayers = Layer.mergeAll(
    Layer.succeed(FetchService, fetch)
);

type HttpRequestError = Error;
type HttpRequestEffect = Effect.Effect<Response, HttpRequestError, HttpRequestServices>;

const httpRequest = (
    path: string,
    options: RequestInit
): HttpRequestEffect => // RにHttpRequestServiceが追加された
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

    
const getHttpResponseObjectWithHandle = <T, S>(
	path: string,
	options: RequestInit,
	handleSuccess: (data: T) => Effect.Effect<S, never, never>,
	handleFailure: (e: HttpRequestError) => Effect.Effect<S, never, never>
) => pipe(
	httpRequest(path, { ...options, method: "GET" }),
	parseResponseJson<T>(),
	Effect.flatMap(handleSuccess),
	Effect.catchAll(handleFailure),
);

const postHttpRequestWithHandle = (
	path: string,
	options: RequestInit,
	handleSuccess: () => Effect.Effect<void, never, never>,
	handleFailure: (e: HttpRequestError) => Effect.Effect<void, never, never>
) => pipe(
	httpRequest(path, { ...options, method: "POST" }),
	Effect.flatMap(handleSuccess),
	Effect.catchAll(handleFailure),
    );

const parseResponseJson = <T>() =>
    <R>(resEffect: Effect.Effect<Response, HttpRequestError, R>): Effect.Effect<T, HttpRequestError, R> =>
        pipe(
            resEffect,
            Effect.flatMap((res) => Effect.tryPromise({
                try: () => res.json() as Promise<T>,
                catch: (e) => new Error(`JSON parsing failed: ${String(e)}`)
            })),
        );

export {
    FetchService,
    HttpRequestServices,
    HttpRequestLayers,
    HttpRequestError,
    HttpRequestEffect,
    getHttpResponseObjectWithHandle,
    postHttpRequestWithHandle,
    parseResponseJson,
};
