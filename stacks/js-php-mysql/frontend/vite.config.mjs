import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    root: "./src",
    build: {
        outDir: resolve(__dirname, "dist"),
    },

    server: {
        host: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "/api"),
            },
        },
    },
});
