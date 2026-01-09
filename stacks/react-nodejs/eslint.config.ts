import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default defineConfig([
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        ignores: ["**/node_modules/**", "**/dist/**"],
        plugins: {
            js,
            import: importPlugin,
        },
        extends: ["js/recommended"],
        rules: {
            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
            "no-redeclare": "off",
            "no-undef": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    // インターフェースや型定義での引数を無視するように設定
                    args: "after-used",
                    argsIgnorePattern: "^_", // _ で始まる引数は無視
                    varsIgnorePattern: "^_",
                },
            ],
        },
    },
    prettier,
]);
