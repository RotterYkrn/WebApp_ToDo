import { Cause, Effect, Exit } from "effect";
import { describe, it, expect } from "@effect/vitest";
import { parseResponseJson } from "@/core/http/helpers/parseResponse";
import { ParseJsonError } from "@/core/errors";

describe("parseResponseJson", () => {
    interface ParseType {
        data: string
        option?: string
    }

    const testParseSucceed = (data: ParseType) =>
        Effect.gen(function* () {
            const mockResponse = new Response(JSON.stringify(data), { status: 200 });
            const resEffect = Effect.succeed(mockResponse);

            const result = yield* resEffect.pipe(
                parseResponseJson<ParseType>()
            );

            expect(result).toStrictEqual(data);
        });
    
    const testParseFailed = (data: unknown) =>
        Effect.gen(function* () {
            const mockResponse = new Response(JSON.stringify(data), { status: 200 });
            const resEffect = Effect.succeed(mockResponse);

            const result = yield* resEffect.pipe(
                parseResponseJson<ParseType>(),
                Effect.exit,
            );

            expect(Exit.isFailure(result)).toBeTruthy();
            if (Exit.isFailure(result)) {
                const resultError = Cause.squash(result.cause) as ParseJsonError;
                expect(resultError._tag).toBe("ParseJsonError");
                if (resultError._tag === "ParseJsonError") {
                    expect(resultError.message).toContain("JSON parsing");
                    expect(resultError.responseJson).toStrictEqual(mockResponse.json());
                }
            }
        });

    it.effect("成功、すべてのプロパティが存在", () =>
        testParseSucceed({ data: "test", option: "test" })
    );

    it.effect("成功、必須プロパティのみ", () =>
        testParseSucceed({ data: "test" })
    );

    it.effect.fails("失敗、リテラル型", () =>
        testParseFailed("Invalid JSON")
    );

    it.effect.fails("失敗、必須プロパティ不足", () =>
        testParseFailed({ option: "option" })
    );

    it.effect.fails("失敗、プロパティ過多", () =>
        testParseFailed({ data: "data", option: "option", extra: "extra" })
    );

    it.effect("失敗、受け取った Effect が既に失敗している", () =>
        Effect.gen(function* () {
            const error = new Error("Network Error");
            const resEffect = Effect.fail(error);

            const result = yield* resEffect.pipe(
                parseResponseJson(),
                Effect.exit,
            );

            expect(Exit.isFailure(result)).toBeTruthy();
            if (Exit.isFailure(result)) {
                expect(Cause.squash(result.cause)).toBe(error);
            }
        })
    );
});
