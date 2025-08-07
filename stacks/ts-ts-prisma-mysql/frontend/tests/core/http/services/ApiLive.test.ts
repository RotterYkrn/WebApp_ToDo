import { Effect, pipe } from "effect";
import { describe, it, expect, vi, beforeEach, type Mock } from "@effect/vitest";
import { ApiLive, handleResponse } from "@/core/http/services/ApiLive";
import { ApiService } from "@/core/http";
import {
    HttpError,
} from "@/errors";
import { HttpStatus } from "@/core/http/types/HttpStatus";
import { validateAppError } from "tests/test-utils";

// global.fetch のモック
global.fetch = vi.fn();

const mockFetch = (body: unknown, init: ResponseInit) => {
	(fetch as Mock).mockResolvedValue(new Response(JSON.stringify(body), init));
};

const mockFetchError = (error: unknown) => {
	(fetch as Mock).mockRejectedValue(error);
};

const executeApi = (method: "get" | "post", path: string, requestBody?: unknown) => 
    ApiService.pipe(
        Effect.flatMap(api => 
            method === "get"
                ? api.get(path)
                : api.post(path, { body: JSON.stringify(requestBody) })
        ),
        Effect.provide(ApiLive),
    );
    
const testApiSucceed = (
    method: "get" | "post",
    path: string,
    status: number,
    responseBody: unknown,
    requestBody?: unknown
) => Effect.gen(function* () {
    mockFetch(responseBody, { status });

    const response = yield* executeApi(method, path, requestBody);

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
    const fetchError = new Error("Network Error");
    mockFetchError(fetchError);

    const result = yield* Effect.exit(
        executeApi(method, path)
    );

    validateAppError(
        result,
        "NetworkError",
        (networkError) => {
            expect(networkError.path).toBe(path);
            expect(networkError.message).toContain("Network error");
            expect(networkError.message).toContain(method.toUpperCase());
            expect(networkError.originalError).toStrictEqual(fetchError);
        }
    );
});

const testApiFailed_HttpError = (
    method: "get" | "post",
    path: string,
    status: number,
    expectedTag: HttpError["_tag"]
) => Effect.gen(function* () {
    mockFetch({}, { status });

    const result = yield* Effect.exit(
        executeApi(method, path)
    );

    validateAppError(
        result,
        expectedTag,
        (httpError) => {
            expect(httpError.path).toBe(path);
            expect(httpError.message).toContain("HTTP error");
            expect(httpError.message).toContain(method.toUpperCase());
        }
    );
});

/**
 * HttpError のテストについては、ApiLive サービスが classifyHttpError ヘルパーを正しく呼び出し、
 * その結果に基づいて適切に Effect.fail するかという、結合部分のテストに焦点を当てる。
 * そのため、代表的なエラーステータスのみをテストする。
 *
 * classifyHttpError 自体の網羅的なテストは、
 * `tests/core/http/helpers/classifyHttpError.test.ts` で行う。
 */
describe("ApiLive", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("get", () => {
        it.effect("成功、レスポンスを返す", () =>
            testApiSucceed(
                "get",
                "/test/get-success",
                HttpStatus.OK,
                { message: "Success" }
            )
        );

        it.effect("失敗：ネットワークエラー", () =>
            testApiFailed_NetworkError(
                "get",
                "/test/get-failure",
            )
        );

        it.effect("失敗：HTTP 400 エラー", () =>
            testApiFailed_HttpError(
                "get",
                "/test/get-http-400-error",
                HttpStatus.BAD_REQUEST,
                "BadRequestError"
            )
        );

        it.effect("失敗：HTTP 500 エラー", () =>
            testApiFailed_HttpError(
                "get",
                "/test/get-http-500-error",
                HttpStatus.INTERNAL_SERVER_ERROR,
                "InternalServerError"
            )
        );
    });

    describe("post", () => {
        it.effect("成功", () =>
            testApiSucceed(
                "post",
                "/test/post-success",
                HttpStatus.OK,
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

        it.effect("失敗：HTTP 400 エラー", () =>
            testApiFailed_HttpError(
                "post",
                "/test/post-http-400-error",
                HttpStatus.BAD_REQUEST,
                "BadRequestError"
            )
        );

        it.effect("失敗：HTTP 500 エラー", () =>
            testApiFailed_HttpError(
                "post",
                "/test/post-http-500-error",
                HttpStatus.INTERNAL_SERVER_ERROR,
                "InternalServerError"
            )
        );
    });
});

describe("handleResponse", () => {
    it.effect("成功、レスポンスをそのまま返す", () =>
        Effect.gen(function* () {
            const response = new Response("{}", { status: HttpStatus.OK });

            const result = yield* pipe(
                Effect.succeed(response),
                handleResponse("/test/handle-response", "Error"),
            );

            expect(result).toBe(response);
        }),
    );

    it.effect("失敗、400 エラーを返す", () =>
        Effect.gen(function* () {
            const path = "/test/handle-response-400-error";
            const message = "HTTP Error during TEST";
            const response = new Response("{}", { status: HttpStatus.BAD_REQUEST });

            const result = yield* Effect.exit(pipe(
                Effect.succeed(response),
                handleResponse(path, message),
            ));

            validateAppError(
                result,
                "BadRequestError",
                (httpError) => {
                    expect(httpError.path).toBe(path);
                    expect(httpError.message).toBe(message);
                }
            );
        })
    );

    it.effect("失敗、500 エラーを返す", () =>
        Effect.gen(function* () {
            const path = "/test/handle-response-500-error";
            const message = "HTTP Error during TEST";
            const response = new Response("{}", { status: HttpStatus.INTERNAL_SERVER_ERROR });

            const result = yield* Effect.exit(pipe(
                Effect.succeed(response),
                handleResponse(path, message),
            ));

            validateAppError(
                result,
                "InternalServerError",
                (httpError) => {
                    expect(httpError.path).toBe(path);
                    expect(httpError.message).toBe(message);
                }
            );
        })
    );
});
