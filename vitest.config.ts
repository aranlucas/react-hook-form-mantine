/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    css: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
  },
});
