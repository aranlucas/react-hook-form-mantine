import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react";
import { StoryForm } from "./StoryForm";

const preview: Preview = {
  // Storybook applies decorators inside-out: every story gets Mantine, and component
  // stories also get a form. Stories that render their own <form> set `form: false`.
  decorators: [
    (Story, { args, parameters }) =>
      parameters.form === false ? (
        <Story />
      ) : (
        <StoryForm
          {...parameters.form}
          defaultValues={{
            ...(args.name && { [args.name]: args[args.name] }),
            ...parameters.form?.defaultValues,
          }}
          resolver={parameters.resolver}
        >
          <Story />
        </StoryForm>
      ),
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
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
