import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const packageSource = fileURLToPath(new URL("../src/index.ts", import.meta.url));
const sharedDependencies = [
  "@mantine/core",
  "@mantine/dates",
  "@mantine/hooks",
  "react",
  "react-dom",
  "react-hook-form",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
  },
  resolve: {
    alias: {
      "react-hook-form-mantine": packageSource,
    },
    dedupe: sharedDependencies,
  },
});
