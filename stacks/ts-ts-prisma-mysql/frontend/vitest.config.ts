import { resolve } from "node:path";
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.ts'],
    // coverage: {            // カバレッジ設定 (オプション)
    //   reporter: ['text', 'json', 'html'],
    // },
  },

	plugins: [tsconfigPaths()],
});