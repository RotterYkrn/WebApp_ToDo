import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: { globals: globals.node },
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { import: "eslint-plugin-import" },
        extends: ["plugin:import/recommended"],
        rules: {
            // 例: import の順序をチェック
            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal"],
                    "newlines-between": "always",
                },
            ],
            // 未解決の import を検出
            "import/no-unresolved": "error",
            // import 重複を防ぐ
            "import/no-duplicates": "error",
        },
    },
    prettierConfig,
]);
