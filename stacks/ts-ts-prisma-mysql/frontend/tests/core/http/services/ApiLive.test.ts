import { Cause, Effect, Exit, pipe } from "effect";
import { describe, it, expect, vi, beforeEach, type Mock } from "@effect/vitest";
import { ApiLive, handleResponse } from "@/core/http/services/ApiLive";
import { ApiService } from "@/core/http";
import { HttpError, ApiError } from "@/core/errors";

// global.fetch のモック
global.fetch = vi.fn();

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

const testApiFailed_NetworkError = (
    method: "get" | "post",
    path: string,
) => Effect.gen(function* () {
    const error = new Error("Network Error");
    mockFetchError(error);

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
        const resultError = Cause.squash(result.cause) as ApiError;
        expect(resultError._tag).toBe("NetworkError");
        if (resultError._tag === "NetworkError") {
            expect(resultError.path).toBe(path);
            expect(resultError.message).toContain("Network error");
            expect(resultError.message).toContain(method.toUpperCase());
            expect(resultError.originalError).toStrictEqual(error);
        }
    }
});

const testApiFailed_HttpError = (
    method: "get" | "post",
    path: string,
    status: number,
) => Effect.gen(function* () {
    mockFetch({}, { status });

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
        const resultError = Cause.squash(result.cause) as ApiError;
        expect(resultError._tag).toBe("HttpError");
        if (resultError._tag === "HttpError") {
            expect(resultError.path).toBe(path);
            expect(resultError.message).toContain("HTTP error");
            expect(resultError.message).toContain(method.toUpperCase());
            expect(resultError.status).toBe(status);
        }
    }
});

describe("ApiLive", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("get", () => {
        it.effect("成功、レスポンスを返す", () =>
            testApiSucceed(
                "get",
                "/test/get-success",
                200,
                { message: "Success" }
            )
        );

        it.effect("失敗：ネットワークエラー", () =>
            testApiFailed_NetworkError(
                "get",
                "/test/get-failure",
            )
        );

        it.effect("失敗：HTTP エラー", () =>
            testApiFailed_HttpError(
                "get",
                "/test/get-http-error",
                500,
            )
        );
    });

    describe("post", () => {
        it.effect("成功", () =>
            testApiSucceed(
                "post",
                "/test/post-success",
                200,
                { message: "Created" },
                { data: "some data" }
            )
        );

        it.effect("失敗：ネットワークエラー", () =>
            testApiFailed_NetworkError(
                "post",
                "/test/post-failure",
            )
        );

        it.effect("失敗：HTTP エラー", () =>
            testApiFailed_HttpError(
                "post",
                "/test/post-http-error",
                500,
            )
        );
    });
});

describe("handleResponse", () => {
    it.effect("成功、レスポンスをそのまま返す", () =>
        Effect.gen(function* () {
            const response = new Response("{}", { status: 200 });

            const result = yield* pipe(
                Effect.succeed(response),
                handleResponse("/test/handle-response", "Error"),
            );

            expect(result).toBe(response);
        }),
    );

    it.effect("失敗、エラーを返す", () =>
        Effect.gen(function* () {
            const path = "/test/handle-response-error";
            const status = 500;
            const message = "HTTP Error during TEST";
            const response = new Response("{}", { status });

            const result = yield* Effect.exit(pipe(
                Effect.succeed(response),
                handleResponse(path, message),
            ));

            expect(Exit.isFailure(result)).toBe(true);
            if (Exit.isFailure(result)) {
                const resultError = Cause.squash(result.cause) as HttpError;
                expect(resultError.path).toBe(path);
                expect(resultError.status).toBe(status);
                expect(resultError.message).toBe(message);
            }
        }),
    );
});
