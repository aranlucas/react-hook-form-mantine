import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { fileURLToPath } from "node:url";
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        include: ["src/**/*.{ts,tsx}"],
        exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx", "src/test/**", "src/index.ts"],
      },
      projects: [
        {
          extends: true,
          test: {
            name: "unit",
            include: ["src/**/*.test.{ts,tsx}"],
            css: true,
            globals: true,
            environment: "jsdom",
            setupFiles: "./src/test/setupTests.ts",
          },
        },
        {
          extends: true,
          // Every story is a test: it must render, pass its play function and `.test()`s, and
          // have no accessibility violations. The same run powers the Storybook test widget.
          plugins: [
            storybookTest({
              configDir: fileURLToPath(new URL("./.storybook", import.meta.url)),
              storybookScript: "pnpm storybook --no-open",
            }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: playwright(),
              instances: [{ browser: "chromium" }],
            },
          },
        },
      ],
    },
  }),
);
