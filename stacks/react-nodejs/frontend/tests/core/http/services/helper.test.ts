import { describe, expect, it } from "@effect/vitest";
import { Effect, pipe } from "effect";
import { validateAppError } from "tests/test-utils";

import {
    HttpBadRequestError,
    HttpForbiddenError,
    HttpNotFoundError,
    HttpOtherClientError,
    HttpOtherServerError,
    HttpUnauthorizedError,
    HttpUnknownError,
} from "@/errors/types/shared/HttpError";
import {
    classifyHttpError,
    ensureHttpStatus,
    handleHttpError,
} from "@/shared/http/services/helper";
import { HttpStatus } from "@/shared/http/types/HttpStatus";

describe("handleHttpError", () => {
    it.effect("成功ならば、レスポンスをそのまま返す", () =>
        Effect.gen(function* () {
            const response = new Response("{}", { status: HttpStatus.OK });

            const result = yield* pipe(
                Effect.succeed(response),
                Effect.flatMap(handleHttpError("/test/handle-response-success", "Error")),
            );

            expect(result).toEqual(response);
        }),
    );

    it.effect("レスポンスステータスが 400 の場合、BadRequestError を返す", () =>
        Effect.gen(function* () {
            const path = "/test/handle-response-400-error";
            const message = "HTTP Error during TEST";
            const response = new Response("{}", { status: HttpStatus.BAD_REQUEST });

            const result = yield* Effect.exit(
                pipe(Effect.succeed(response), Effect.flatMap(handleHttpError(path, message))),
            );

            validateAppError(result, "HttpBadRequestError", (httpError) => {
                expect(httpError.path).toBe(path);
                expect(httpError.message).toBe(message);
            });
        }),
    );
});

describe("ensureHttpStatus", () => {
    it.effect("期待するステータスと一致する場合、レスポンスをそのまま返す", () =>
        Effect.gen(function* () {
            const status = HttpStatus.OK;
            const response = new Response("{}", { status });

            const result = yield* pipe(
                Effect.succeed(response),
                Effect.flatMap(ensureHttpStatus(status, "GET", "/test/ensure-http-status-success")),
            );

            expect(result).toEqual(response);
        }),
    );

    it.effect("期待するステータスと異なる場合、HttpUnexpectedStatusError を返す", () =>
        Effect.gen(function* () {
            const resStatus = HttpStatus.OK;
            const response = new Response("{}", { status: resStatus });

            const expectedStatus = HttpStatus.CREATED;
            const method = "GET";
            const path = "/test/ensure-http-different-status";

            const result = yield* Effect.exit(
                pipe(
                    Effect.succeed(response),
                    Effect.flatMap(ensureHttpStatus(expectedStatus, method, path)),
                ),
            );

            validateAppError(result, "HttpUnexpectedStatusError", (HttpUnexpectedStatusError) => {
                expect(HttpUnexpectedStatusError.path).toBe(path);
                expect(HttpUnexpectedStatusError.message).toContain(method);
                expect(HttpUnexpectedStatusError.expectedStatus).toBe(expectedStatus);
                expect(HttpUnexpectedStatusError.responseStatus).toBe(resStatus);
            });
        }),
    );
});

describe("classifyHttpError", () => {
    const errorInfo = {
        path: "/test",
        message: "Test error",
        responseBody: { foo: "bar" },
    };

    const test = <E>(status: number, expected: E) => {
        const res = new Response(null, { status });
        const error = classifyHttpError(res, errorInfo);
        expect(error).toBeInstanceOf(expected);
        expect(error.path).toBe(errorInfo.path);
        expect(error.message).toBe(errorInfo.message);
        if (error._tag !== "HttpUnexpectedStatusError") {
            expect(error.responseBody).toBe(errorInfo.responseBody);
        }
        if (
            error instanceof HttpOtherClientError ||
            error instanceof HttpOtherServerError ||
            error instanceof HttpUnknownError
        ) {
            expect(error.status).toBe(status);
        }
    };

    it("ステータスコード400の場合、BadRequestErrorを返す", () => {
        test(HttpStatus.BAD_REQUEST, HttpBadRequestError);
    });

    it("ステータスコード401の場合、UnauthorizedErrorを返す", () => {
        test(HttpStatus.UNAUTHORIZED, HttpUnauthorizedError);
    });

    it("ステータスコード403の場合、HttpForbiddenErrorを返す", () => {
        test(HttpStatus.FORBIDDEN, HttpForbiddenError);
    });

    it("ステータスコード404の場合、HttpNotFoundErrorを返す", () => {
        test(HttpStatus.NOT_FOUND, HttpNotFoundError);
    });

    it("その他の4xx系ステータスコードの場合、HttpOtherClientErrorを返す", () => {
        test(418, HttpOtherClientError); // I'm a teapot
    });

    it("その他の5xx系ステータスコードの場合、HttpOtherServerErrorを返す", () => {
        test(503, HttpOtherServerError); // Service Unavailable
    });

    it("予期しないステータスコードの場合、HttpUnknownErrorを返す", () => {
        test(200, HttpUnknownError);
    });
});
