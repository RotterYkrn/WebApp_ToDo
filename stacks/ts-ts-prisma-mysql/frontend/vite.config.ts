import { resolve } from "node:path";
import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	base: "./",
	root: "./src",
	build: {
		outDir: resolve(__dirname, "dist"),
	},
	plugins: [tsconfigPaths()],

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
