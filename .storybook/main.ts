import { defineMain } from "@storybook/react-vite/node";
import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";

export default defineMain({
  stories: [
    "./pages/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../example/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    // Serves an MCP endpoint at /mcp so coding agents can read the component manifest and stories.
    "@storybook/addon-mcp",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["./public"],
  typescript: {
    // Props tables. The wrappers are generic functions over intersected Mantine and controller
    // props, which only the TypeScript-based docgen resolves.
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      // Keep the component's own props; drop inherited DOM attributes and Mantine's style props
      // (`m`, `p`, `bg`, …), which every Mantine component shares.
      propFilter: (prop) =>
        !prop.parent ||
        !/node_modules\/(@types\/react|csstype|@mantine\/core\/lib\/core\/Box)\//.test(
          prop.parent.fileName,
        ),
    },
  },
  features: {
    // The component manifest for MCP, from the TypeScript language service.
    experimentalReactComponentMeta: true,
    // `Story.test()`: several named tests per story, each listed under the story in the sidebar.
    experimentalTestSyntax: true,
    // "Show code" reads the story source instead of re-serializing the rendered element.
    experimentalCodeExamples: true,
    // Search matches headings inside docs pages, not only story names.
    experimentalSearchDocsHeadings: true,
    // The manifest the MCP addon serves to agents.
    componentsManifest: true,
    // Highlights stories affected by your local changes, and lets agents push reviews over MCP.
    changeDetection: true,
    experimentalReview: true,
  },
  // Custom tags show up in the sidebar's tag filter.
  tags: {
    validation: {},
    example: {},
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
});
