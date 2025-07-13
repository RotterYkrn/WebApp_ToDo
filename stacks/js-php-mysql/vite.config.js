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
            "/api": {
                target: "http://backend:9000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "/api"),
            },
        },
    },
});
