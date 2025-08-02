import {
    BadRequestError,
    ForbiddenError,
    HttpError,
    InternalServerError,
    NotFoundError,
    OtherClientError,
    OtherServerError,
    UnauthorizedError,
    UnknownHttpError,
} from "@/core/errors";
import { classifyHttpError } from "@/core/http/helpers/classifyHttpError";
import { HttpStatus } from "@/core/http/types/HttpStatus";
import { describe, expect, it } from "vitest";

describe("classifyHttpError", () => {
    const errorInfo = {
        path: "/test",
        message: "Test error",
        responseBody: { foo: "bar" },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const test = (status: number, expected: new (...args: any[]) => HttpError) => {
        const res = new Response(null, { status });
        const error = classifyHttpError(res, errorInfo);
        expect(error).toBeInstanceOf(expected);
        expect(error.path).toBe(errorInfo.path);
        expect(error.message).toBe(errorInfo.message);
        expect(error.responseBody).toBe(errorInfo.responseBody);
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
