import { Box } from "@mantine/core";
import { type StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { useChannel } from "@storybook/addons";
import { EVENTS } from "./constants";
import { useEffect } from "react";
import { STORY_RENDERED } from "@storybook/core-events";

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

  useEffect(() => {
    console.log("Re-Render");
    console.log(methods.formState.dirtyFields);
  }, [methods.formState.dirtyFields]);

  const emit = useChannel({
    [EVENTS.REQUEST]: () => {
      console.log("REQUEST");

      void methods.handleSubmit(
        (data, e) => {
          console.log(data, e);
          emit(EVENTS.RESULT, { values: data });
        },
        (errors, e) => {
          console.log(errors, e);
          emit(EVENTS.RESULT, { errors });
        }
      )();
    },
    [STORY_RENDERED]: () => {
      console.log("STORY_RENDERED");

      emit(EVENTS.RESULT, methods.formState);
    },
    [EVENTS.CLEAR]: () => {
      console.log("CLEAR");
      emit(EVENTS.RESULT, methods.formState);
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <FormProvider {...methods}>
        <form id="hook-form">
          <StoryComponent />
        </form>
      </FormProvider>
    </Box>
  );
};
