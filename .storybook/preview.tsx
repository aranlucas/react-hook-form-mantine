import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { parameters, args } = context;
      const defaultValues = {
        ...(args?.name ? { [args.name]: args[args.name] } : {}),
        ...parameters?.form?.defaultValues,
      };
      const methods = useForm({
        defaultValues,
        resolver: parameters?.resolver,
      });
      return (
        <MantineProvider>
          <FormProvider {...methods}>
            <form
              id="hook-form"
              onSubmit={methods.handleSubmit(parameters?.form?.onSubmit)}
              style={{ padding: 16 }}
            >
              <Story />
            </form>
          </FormProvider>
        </MantineProvider>
      );
    },
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
