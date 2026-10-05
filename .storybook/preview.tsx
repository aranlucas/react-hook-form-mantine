import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Box, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { Preview } from "@storybook/react";
import { action } from "storybook/actions";
import { FormStatePanel } from "./FormStatePanel";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { parameters, args } = context;

      const defaultValues = {};

      if (args?.name) Object.assign(defaultValues, { [args.name]: args[args.name] });
      Object.assign(defaultValues, parameters?.form?.defaultValues);

      const methods = useForm({
        defaultValues,
        resolver: parameters?.resolver,
        mode: parameters?.form?.mode ?? "onChange",
      });

      const [submitted, setSubmitted] = useState<unknown>(null);

      // Stories that bring their own form (such as the full example) opt out with `form: false`.
      if (parameters?.form === false) {
        return (
          <MantineProvider>
            <Story />
          </MantineProvider>
        );
      }

      return (
        <MantineProvider>
          <FormProvider {...methods}>
            <Box
              component="form"
              id="hook-form"
              noValidate
              // A real submit, so validation runs and the first invalid field is focused.
              onSubmit={methods.handleSubmit((data) => {
                setSubmitted(data);
                parameters?.form?.onSubmit?.(data);
                action("onSubmit")(data);
              })}
              p="md"
              maw={500}
            >
              <Story />
              <FormStatePanel submitted={submitted} onReset={() => setSubmitted(null)} />
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
