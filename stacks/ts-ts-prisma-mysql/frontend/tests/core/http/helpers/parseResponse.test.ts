import { Cause, Effect, Exit } from "effect";
import { describe, it, expect } from "@effect/vitest";
import { parseResponseJson } from "@/core/http/helpers/parseResponse";
import { ParseJsonError } from "@/core/errors";

describe("parseResponseJson", () => {
    interface parseType {
        data: string
    }

    it.effect("成功、パースされたオブジェクトを返す", () =>
        Effect.gen(function* () {
            const data: parseType = { data: "test" };
            const mockResponse = new Response(JSON.stringify(data), { status: 200 });
            const resEffect = Effect.succeed(mockResponse);

            const result = yield* resEffect.pipe(
                parseResponseJson<parseType>()
            );

            expect(result).toStrictEqual(data);
        })
    );

    it.effect("失敗、パース不可", () =>
        Effect.gen(function* () {
            const mockResponse = new Response("invalid json", { status: 200 });
            const resEffect = Effect.succeed(mockResponse);

            const result = yield* resEffect.pipe(
                parseResponseJson(),
                Effect.exit,
            );

            expect(Exit.isFailure(result)).toBe(true);
            if (Exit.isFailure(result)) {
                expect(Cause.squash(result.cause)).toBeInstanceOf(ParseJsonError);
            }
        })
    );

    it.effect("失敗、受け取った Effect が既に失敗している", () =>
        Effect.gen(function* () {
            const error = new Error("Network Error");
            const resEffect = Effect.fail(error);

            const result = yield* resEffect.pipe(
                parseResponseJson(),
                Effect.exit,
            );

            expect(Exit.isFailure(result)).toBe(true);
            if (Exit.isFailure(result)) {
                expect(Cause.squash(result.cause)).toBe(error);
            }
        })
    );
});
