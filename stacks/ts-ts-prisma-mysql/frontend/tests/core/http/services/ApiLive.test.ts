import { Cause, Data, Effect, Exit, pipe } from "effect";
import { describe, it, expect, vi, beforeEach, type Mock } from "@effect/vitest";
import { ApiLive, handleResponse } from "@/core/http/services/ApiLive";
import { ApiService } from "@/core/http";

// global.fetch のモック
global.fetch = vi.fn();

class NetworkError extends Data.TaggedClass("NetworkError")<{ readonly message: string }> { };

class HttpError extends Data.TaggedClass("HttpError")<{ readonly status: number }> { };

const mockFetch = (body: unknown, init: ResponseInit) => {
	(fetch as Mock).mockResolvedValue(new Response(JSON.stringify(body), init));
};

const mockFetchError = (error: unknown) => {
	(fetch as Mock).mockRejectedValue(error);
};
    
const testApiSucceed = (
    method: "get" | "post",
    path: string,
    status: number,
    responseBody: unknown,
    requestBody?: unknown
) => Effect.gen(function* () {
    mockFetch(responseBody, { status });

    const response = yield* ApiService.pipe(
        Effect.flatMap((api) =>
            method === "get"
                ? api.get(path)
                : api.post(path, { body: JSON.stringify(requestBody) })
        ),
        Effect.provide(ApiLive),
    );

    const data = yield* Effect.promise(() => response.json());

    expect(fetch).toHaveBeenCalledWith(path, {
        method: method.toUpperCase(),
        body: method === "post" ? JSON.stringify(requestBody) : undefined,
    });
    expect(response.ok).toBe(true);
    expect(data).toEqual(responseBody);
});

const testApiFailed = (
    method: "get" | "post",
    path: string,
    info: NetworkError | HttpError,
) => Effect.gen(function* () {
    let category: "Network" | "HTTP";
    let message: string;

    switch (info._tag) {
        case "NetworkError":
            mockFetchError(info.message);
            category = "Network";
            message = info.message;
            break;
        case "HttpError":
            mockFetch({}, { status: info.status });
            category = "HTTP";
            message = info.status.toString();
            break;
    }

    const result = yield* Effect.exit(ApiService.pipe(
        Effect.flatMap(api => 
            method === "get"
                ? api.get(path)
                : api.post(path)
        ),
        Effect.provide(ApiLive),
    ));
            
    expect(Exit.isFailure(result)).toBeTruthy();
    if (Exit.isFailure(result)) {
        const error = Cause.squash(result.cause) as Error;
        expect(error.message).toContain(`${category} error`);
        expect(error.message).toContain(path);
        expect(error.message).toContain(message);
    }
});

describe("ApiLive", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("ApiService", () => {
        describe("get", () => {
            it.effect("should return a successful response on GET", () =>
                testApiSucceed(
                    "get",
                    "/test/get-success",
                    200,
                    { message: "Success" }
                )
            );

            it.effect("should return an error on network failure during GET", () =>
                testApiFailed(
                    "get",
                    "/test/get-failure",
                    new NetworkError({ message: "Network failure" })
                )
            );

            it.effect("should return an error on HTTP error during GET", () =>
                testApiFailed(
                    "get",
                    "/test/get-http-error",
                    new HttpError({ status: 500 })
                )
            );
        });

        describe("post", () => {
            it.effect("should return a successful response on POST", () =>
                testApiSucceed(
                    "post",
                    "/test/post-success",
                    200,
                    { message: "Created" },
                    { data: "some data" }
                )
            );

            it.effect("should return an error on network failure during POST", () =>
                testApiFailed(
                    "post",
                    "/test/post-failure",
                    new NetworkError({ message: "Network failure" })
                )
            );

            it.effect("should return an error on HTTP error during POST", () =>
                testApiFailed(
                    "post",
                    "/test/post-http-error",
                    new HttpError({ status: 500 })
                )
            );
        });
    });

    describe("handleResponse", () => {
        it.effect("should succeed if response is ok", () =>
            Effect.gen(function* () {
                const response = new Response("{}", { status: 200 });

                const result = yield* pipe(
                    Effect.succeed(response),
                    handleResponse("Error"),
                );

                expect(result).toBe(response);
            }),
        );

        it.effect("should fail if response is not ok", () =>
            Effect.gen(function* () {
                const response = new Response("{}", { status: 500 });

                const result = yield* Effect.exit(pipe(
                    Effect.succeed(response),
                    handleResponse("Custom Error: "),
                ));

                expect(Exit.isFailure(result)).toBe(true);
                expect(result).toStrictEqual(Exit.fail(
                    new Error("Custom Error: 500"))
                );
            }),
        );
    });
});
