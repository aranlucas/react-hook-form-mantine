import { Box } from "@mantine/core";
import { type StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { useChannel } from "@storybook/addons";
import { EVENTS } from "./constants";

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

  const { handleSubmit, control } = methods;

  const emit = useChannel({
    [EVENTS.REQUEST]: () => {
      void handleSubmit(
        (values) => {
          emit(EVENTS.RESULT, values);
        },
        (errors) => {
          emit(EVENTS.ERROR, errors);
        },
      )();
    },
  });

  emit(EVENTS.RESULT, control._defaultValues);
  emit(EVENTS.ERROR, control._formState.errors);
  emit(EVENTS.DIRTY, control._formState.dirtyFields);

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
