import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../example/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      build: {
        chunkSizeWarningLimit: 1600,
      },
      // The example imports the package by name; point it at the source like the example app does.
      resolve: {
        alias: {
          "react-hook-form-mantine": fileURLToPath(new URL("../src/index.ts", import.meta.url)),
        },
      },
    }),
};

export default config;
