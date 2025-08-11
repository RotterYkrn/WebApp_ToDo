import { Cause, Effect, Exit } from "effect";
import { describe, it, expect } from "@effect/vitest";
import { parseResponseJson } from "@/shares/http/helpers/parseResponse";
import { validateAppError } from "tests/test-utils";

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

            validateAppError(
                result,
                "ParseJsonError",
                (parseError) => {
                    expect(parseError.message).toContain("JSON parsing");
                    expect(parseError.responseJson).toStrictEqual(mockResponse.json());
                }
            );
        });

    it.effect("成功、すべてのプロパティが存在", () =>
        testParseSucceed({ data: "test", option: "test" })
    );

    it.effect("成功、必須プロパティのみ", () =>
        testParseSucceed({ data: "test" })
    );

    it.effect.skip("失敗、リテラル型", () =>
        testParseFailed("Invalid JSON")
    );

    it.effect.skip("失敗、必須プロパティ不足", () =>
        testParseFailed({ option: "option" })
    );

    it.effect.skip("失敗、プロパティ過多", () =>
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
