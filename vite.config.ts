/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";

const external = [
  "@mantine/core",
  "@mantine/dates",
  "react",
  "react-dom",
  "react/jsx-runtime",
  "react-hook-form",
];

const shouldBuildTypes = process.env.STORYBOOK !== "true";

export default defineConfig({
  plugins: [
    react(),
    shouldBuildTypes &&
      dts({
        entryRoot: "src",
        include: ["src"],
        exclude: [
          "src/**/*.stories.tsx",
          "src/**/*.test.ts",
          "src/**/*.test.tsx",
          "src/stories/**",
          "src/test/**",
        ],
      }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    rolldownOptions: {
      external,
    },
  },
  test: {
    css: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
  },
});
