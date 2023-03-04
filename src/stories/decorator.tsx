import { Box, Button, Group } from "@mantine/core";
import { type StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";

// Borrowed from https://github.com/bbbtech/storybook-formik/blob/master/src/index.tsx
export const withReactHookForm = (StoryComponent: StoryFn, context: any) => {
  // Parameters are used for addons
  const { parameters, args } = context;

  const defaultValues = {
    [args.name]: args[args.name],
    ...parameters?.form?.defaultValues,
  };

  const methods = useForm({
    defaultValues,
    resolver: parameters?.resolver,
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(parameters.form.onSubmit)}>
          <StoryComponent />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </FormProvider>
    </Box>
  );
};
