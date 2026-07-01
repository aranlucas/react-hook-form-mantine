import { type ComponentType } from "react";
import { Box } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";

export const withReactHookForm = (StoryComponent: ComponentType, context: any) => {
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
    <Box mx="auto">
      <FormProvider {...methods}>
        <form id="hook-form">
          <StoryComponent />
        </form>
      </FormProvider>
    </Box>
  );
};
