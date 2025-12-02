import { parseToSchema } from "@/shared/utils";
import { describe, expect, it } from "@effect/vitest";
import { pipe, Schema } from "effect";

describe("parseToSchema", () => {
    const ParseSchema = Schema.Struct({
        data: Schema.String,
        option: Schema.optional(Schema.String),
    });

    const testParseSucceed = (data: unknown) => {
        const result = pipe(
            data,
            parseToSchema(ParseSchema)
        );

        expect(result._tag).toBe("Right");
        if (result._tag === "Right") {
            expect(result.right).toStrictEqual(data);
        }
    };
    
    const testParseFailed = (data: unknown) => {
        const result = pipe(
            data,
            parseToSchema(ParseSchema),
        );

        expect(result._tag).toBe("Left");
        if (result._tag === "Left") {
            const error = result.left;
            expect(error._tag).toBe("ParseSchemaError");
            if (error._tag === "ParseSchemaError") {
                expect(error.failedObject).toStrictEqual(data);
            }
        }
    };

    it("すべてのプロパティが存在するなら、パースされた値を返す", () =>
        testParseSucceed({ data: "test", option: "test" })
    );

    it("必須プロパティが存在するなら、パースされた値を返す", () =>
        testParseSucceed({ data: "test" })
    );

    it.skip("プロパティが過剰に存在する場合、必要なプロパティのみにパースされた値を返す", () =>
        testParseSucceed({ data: "data", option: "option", extra: "extra" })
    );

    it("必須プロパティが不足しているなら、エラーを返す", () =>
        testParseFailed({ option: "option" })
    );
})
