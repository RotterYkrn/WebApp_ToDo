import { describe, expect, it } from "@effect/vitest";
import { Effect, pipe } from "effect";
import { validateAppError } from "tests/test-utils";

import {
    BadRequestError,
    ForbiddenError,
    InternalServerError,
    NotFoundError,
    OtherClientError,
    OtherServerError,
    UnauthorizedError,
    UnknownHttpError,
} from "@/errors";
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

            validateAppError(result, "BadRequestError", (httpError) => {
                expect(httpError.path).toBe(path);
                expect(httpError.message).toBe(message);
            });
        }),
    );

    it.effect("レスポンスステータスが 500 の場合、InternalServerError を返す", () =>
        Effect.gen(function* () {
            const path = "/test/handle-response-500-error";
            const message = "HTTP Error during TEST";
            const response = new Response("{}", { status: HttpStatus.INTERNAL_SERVER_ERROR });

            const result = yield* Effect.exit(
                pipe(Effect.succeed(response), Effect.flatMap(handleHttpError(path, message))),
            );

            validateAppError(result, "InternalServerError", (httpError) => {
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

    it.effect("期待するステータスと異なる場合、UnexpectedStatusError を返す", () =>
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

            validateAppError(result, "UnexpectedStatusError", (unexpectedStatusError) => {
                expect(unexpectedStatusError.path).toBe(path);
                expect(unexpectedStatusError.message).toContain(method);
                expect(unexpectedStatusError.expectedStatus).toBe(expectedStatus);
                expect(unexpectedStatusError.responseStatus).toBe(resStatus);
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
        if (error._tag !== "UnexpectedStatusError") {
            expect(error.responseBody).toBe(errorInfo.responseBody);
        }
        if (
            error instanceof OtherClientError ||
            error instanceof OtherServerError ||
            error instanceof UnknownHttpError
        ) {
            expect(error.status).toBe(status);
        }
    };

    it("ステータスコード400の場合、BadRequestErrorを返す", () => {
        test(HttpStatus.BAD_REQUEST, BadRequestError);
    });

    it("ステータスコード401の場合、UnauthorizedErrorを返す", () => {
        test(HttpStatus.UNAUTHORIZED, UnauthorizedError);
    });

    it("ステータスコード403の場合、ForbiddenErrorを返す", () => {
        test(HttpStatus.FORBIDDEN, ForbiddenError);
    });

    it("ステータスコード404の場合、NotFoundErrorを返す", () => {
        test(HttpStatus.NOT_FOUND, NotFoundError);
    });

    it("ステータスコード500の場合、InternalServerErrorを返す", () => {
        test(HttpStatus.INTERNAL_SERVER_ERROR, InternalServerError);
    });

    it("その他の4xx系ステータスコードの場合、OtherClientErrorを返す", () => {
        test(418, OtherClientError); // I'm a teapot
    });

    it("その他の5xx系ステータスコードの場合、OtherServerErrorを返す", () => {
        test(503, OtherServerError); // Service Unavailable
    });

    it("予期しないステータスコードの場合、UnknownHttpErrorを返す", () => {
        test(200, UnknownHttpError);
    });
});
