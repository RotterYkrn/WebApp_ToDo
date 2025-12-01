import { UnknownAppError } from "@/errors/types/shared/OtherError"; // ParseSchemaErrorをOtherErrorからインポート
import { parseToSchema } from "@/shared/utils";
import { describe, expect, it } from "@effect/vitest";
import { Effect, Schema } from "effect";
import { validateAppError } from "tests/test-utils";

describe("parseToSchema", () => {
    const ParseSchema = Schema.Struct({
        data: Schema.String,
        option: Schema.optional(Schema.String),
    });

    const testParseSucceed = (data: unknown) =>
        Effect.gen(function* () {
            const objEffect = Effect.succeed(data);

            const result = yield* objEffect.pipe(
                parseToSchema(ParseSchema)
            );

            expect(result).toStrictEqual(data);
        });
    
    const testParseFailed = (data: unknown) =>
        Effect.gen(function* () {
            const objEffect = Effect.succeed(data);

            const result = yield* objEffect.pipe(
                parseToSchema(ParseSchema),
                Effect.exit,
            );

            validateAppError(
                result,
                "ParseSchemaError",
                (parseError) => {
                    expect(parseError.message).toContain("did not match the schema");
                    expect(parseError.failedObject).toStrictEqual(data);
                }
            );
        });

    it.effect("成功、すべてのプロパティが存在", () =>
        testParseSucceed({ data: "test", option: "test" })
    );

    it.effect("成功、必須プロパティのみ", () =>
        testParseSucceed({ data: "test" })
    );

    it.effect("失敗、リテラル型", () =>
        testParseFailed("Invalid JSON")
    );

    it.effect("失敗、必須プロパティ不足", () =>
        testParseFailed({ option: "option" })
    );

    it.effect.skip("失敗、プロパティ過多", () =>
        testParseFailed({ data: "data", option: "option", extra: "extra" })
    );

    it.effect("失敗、受け取った Effect が既に失敗している", () =>
        Effect.gen(function* () {
            const error = new Error("Validation Error");
            
            const objEffect = Effect.fail(new UnknownAppError({
                message: error.message,
                originalError: error
            }));

            const result = yield* objEffect.pipe(
                parseToSchema(ParseSchema),
                Effect.exit,
            );

            validateAppError(
                result,
                "UnknownAppError",
                (unknownError) => {
                    expect(unknownError.message).toContain(error.message);
                    expect(unknownError.originalError).toBe(error);
                }
            );
        })
    );
})
