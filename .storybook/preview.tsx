import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Box, MantineProvider } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import type { Preview } from "@storybook/react";
import { FormStatePanel } from "./FormStatePanel";

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
        mode: parameters?.form?.mode ?? "onChange",
      });
      return (
        <MantineProvider>
          <FormProvider {...methods}>
            <Box
              component="form"
              id="hook-form"
              onSubmit={methods.handleSubmit((data) => {
                parameters?.form?.onSubmit?.(data);
                console.log("[Storybook onSubmit]", data);
              })}
              p="md"
              maw={500}
            >
              <Story />
              <FormStatePanel />
            </Box>
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
