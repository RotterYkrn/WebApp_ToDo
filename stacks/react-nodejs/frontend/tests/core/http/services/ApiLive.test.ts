import { beforeEach, describe, expect, it, vi, type Mock } from "@effect/vitest";
import { Effect } from "effect";
import { validateAppError } from "tests/test-utils";

import { HttpError } from "@/errors";
import { ApiService } from "@/shared/http";
import { ApiLive } from "@/shared/http/services/ApiLive";
import { HttpStatus } from "@/shared/http/types/HttpStatus";

// global.fetch のモック
global.fetch = vi.fn();

const mockFetch = (body: unknown, init: ResponseInit) => {
    (fetch as Mock).mockResolvedValue(new Response(JSON.stringify(body), init));
};

const mockFetchError = (error: unknown) => {
    (fetch as Mock).mockRejectedValue(error);
};

const executeApi = (
    method: "get" | "post",
    path: string,
    status: HttpStatus,
    requestBody?: unknown,
    options?: Omit<RequestInit, "body">,
) =>
    ApiService.pipe(
        Effect.flatMap((api) =>
            method === "get"
                ? api.get(path, status, options)
                : api.post(path, status, { body: requestBody, options: { ...options } }),
        ),
        Effect.provide(ApiLive),
    );

const testApiFailed_NetworkError = (method: "get" | "post", path: string) =>
    Effect.gen(function* () {
        const fetchError = new Error("Network Error");
        mockFetchError(fetchError);

        const result = yield* Effect.exit(
            executeApi(method, path, HttpStatus.INTERNAL_SERVER_ERROR),
        );

        validateAppError(result, "NetworkError", (networkError) => {
            expect(networkError.path).toBe(path);
            expect(networkError.message).toContain("Network error");
            expect(networkError.message).toContain(method.toUpperCase());
            expect(networkError.originalError).toStrictEqual(fetchError);
        });
    });

const testApiFailed_HttpError = (
    method: "get" | "post",
    path: string,
    status: HttpStatus,
    expectedTag: HttpError["_tag"],
) =>
    Effect.gen(function* () {
        mockFetch({}, { status });

        const result = yield* Effect.exit(executeApi(method, path, status));

        validateAppError(result, expectedTag, (httpError) => {
            expect(httpError.path).toBe(path);
            expect(httpError.message).toContain("HTTP error");
            expect(httpError.message).toContain(method.toUpperCase());
        });
    });

/**
 * HttpError のテストについては、ApiLive サービスが classifyHttpError ヘルパーを正しく呼び出し、
 * その結果に基づいて適切に Effect.fail するかという、結合部分のテストに焦点を当てる。
 * そのため、代表的なエラーステータスのみをテストする。
 *
 * classifyHttpError 自体の網羅的なテストは、
 * `tests/core/http/services/api-helper.test.ts` で行う。
 */
describe("ApiLive", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("get", () => {
        it.effect("成功時、レスポンスを返す", () =>
            Effect.gen(function* () {
                const resBody = { message: "Success" };
                const resStatus = HttpStatus.OK;
                mockFetch(resBody, { status: resStatus });

                const path = "/test/get-success";
                const options = { headers: { "Content-Type": "application/json" } };

                const response = yield* executeApi("get", path, resStatus, undefined, options);
                const data = yield* Effect.promise(() => response.json());

                expect(fetch).toHaveBeenCalledWith(path, {
                    method: "GET",
                    credentials: "include",
                    body: undefined,
                    ...options,
                });
                expect(response.ok).toBe(true);
                expect(response.status).toBe(resStatus);
                expect(data).toEqual(resBody);
            }),
        );

        it.effect("例外発生時、NetworkError を返す", () =>
            testApiFailed_NetworkError("get", "/test/get-failure"),
        );

        it.effect("レスポンスステータスが 400 の場合、BadRequestError を返す", () =>
            testApiFailed_HttpError(
                "get",
                "/test/get-http-400-error",
                HttpStatus.BAD_REQUEST,
                "HttpBadRequestError",
            ),
        );

        it.effect("レスポンスステータスが 5xx の場合、 HttpOtherServerError を返す", () =>
            testApiFailed_HttpError(
                "get",
                "/test/get-http-500-error",
                HttpStatus.INTERNAL_SERVER_ERROR,
                "HttpOtherServerError",
            ),
        );

        it.effect(
            "レスポンスは成功だが、期待したステータスと異なる場合、HttpUnexpectedStatusError を返す",
            () =>
                Effect.gen(function* () {
                    const resStatus = HttpStatus.OK;
                    mockFetch({}, { status: resStatus });

                    const path = "/test/get-different-status-error";
                    const expectedStatus = HttpStatus.CREATED;

                    const result = yield* Effect.exit(executeApi("get", path, expectedStatus));

                    validateAppError(
                        result,
                        "HttpUnexpectedStatusError",
                        (HttpUnexpectedStatusError) => {
                            expect(HttpUnexpectedStatusError.path).toBe(path);
                            expect(HttpUnexpectedStatusError.message).toContain("GET");
                            expect(HttpUnexpectedStatusError.expectedStatus).toBe(expectedStatus);
                            expect(HttpUnexpectedStatusError.responseStatus).toBe(resStatus);
                        },
                    );
                }),
        );
    });

    describe("post", () => {
        it.effect("成功時、レスポンスを返す", () =>
            Effect.gen(function* () {
                const resBody = { message: "Success" };
                const resStatus = HttpStatus.OK;
                mockFetch(resBody, { status: resStatus });

                const path = "/test/post-success";
                const reqBody = { data: "some data" };
                const options = { headers: { "Content-Type": "application/json" } };

                const response = yield* executeApi("post", path, resStatus, reqBody, options);
                const data = yield* Effect.promise(() => response.json());

                expect(fetch).toHaveBeenCalledWith(path, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(reqBody),
                    ...options,
                });
                expect(response.ok).toBe(true);
                expect(response.status).toBe(resStatus);
                expect(data).toEqual(resBody);
            }),
        );

        it.effect("例外発生時、NetworkError を返す", () =>
            testApiFailed_NetworkError("post", "/test/post-failure"),
        );

        it.effect("レスポンスステータスが 400 の場合、BadRequestError を返す", () =>
            testApiFailed_HttpError(
                "post",
                "/test/post-http-400-error",
                HttpStatus.BAD_REQUEST,
                "HttpBadRequestError",
            ),
        );

        it.effect("レスポンスステータスが 5xx の場合、HttpOtherServerError を返す", () =>
            testApiFailed_HttpError(
                "post",
                "/test/post-http-500-error",
                HttpStatus.INTERNAL_SERVER_ERROR,
                "HttpOtherServerError",
            ),
        );

        it.effect(
            "レスポンスは成功だが、期待したステータスと異なる場合、HttpUnknownError を返す",
            () =>
                Effect.gen(function* () {
                    const resStatus = HttpStatus.OK;
                    mockFetch({}, { status: resStatus });

                    const path = "/test/post-different-status-error";
                    const expectedStatus = HttpStatus.CREATED;

                    const result = yield* Effect.exit(executeApi("post", path, expectedStatus));

                    validateAppError(
                        result,
                        "HttpUnexpectedStatusError",
                        (HttpUnexpectedStatusError) => {
                            expect(HttpUnexpectedStatusError.path).toBe(path);
                            expect(HttpUnexpectedStatusError.message).toContain("POST");
                            expect(HttpUnexpectedStatusError.expectedStatus).toBe(expectedStatus);
                            expect(HttpUnexpectedStatusError.responseStatus).toBe(resStatus);
                        },
                    );
                }),
        );
    });
});
