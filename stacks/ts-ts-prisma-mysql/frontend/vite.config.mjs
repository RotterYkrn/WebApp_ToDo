import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	base: "./",
	root: "./src",
	build: {
		outDir: resolve(__dirname, "dist"),
	},

	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
		extensions: ['.ts'], // import するファイルの拡張子
	},

	server: {
		host: true,
		proxy: {
			"/api": {
				target: "http://backend:3000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, "/api"),
			},
		},
	},
});
