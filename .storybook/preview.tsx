import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import type { Preview } from "@storybook/react";
import React from "react";
import { MantineProvider } from "@mantine/core";
import { withReactHookForm } from "../src/stories/decorator";

export const decorators = [
  (story: any) => <MantineProvider>{story()}</MantineProvider>,
  (story: any, context) => withReactHookForm(story, context),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
