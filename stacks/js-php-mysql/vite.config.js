import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "./src",
    build: {
        outDir: resolve(__dirname, "dist"),
    },

    server: {
        host: true,
        proxy: {
            "^/.*\\.php$": {
                target: "http://nginx", // nginx コンテナを通して php-fpm に届く
                changeOrigin: true,
            },
        },
    },
});
