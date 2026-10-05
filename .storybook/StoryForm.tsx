import { Box } from "@mantine/core";
import { type ReactNode, useState } from "react";
import { type FieldValues, FormProvider, type Resolver, useForm } from "react-hook-form";
import { action } from "storybook/actions";
import { FormStatePanel } from "./FormStatePanel";

export type StoryFormParameters = {
  defaultValues?: FieldValues;
  mode?: "onSubmit" | "onBlur" | "onChange" | "onTouched" | "all";
  onSubmit?: (data: FieldValues) => void;
};

type StoryFormProps = StoryFormParameters & {
  resolver?: Resolver;
  children: ReactNode;
};

/** The form every component story renders in, with a live view of its state. */
export function StoryForm({
  defaultValues,
  mode = "onChange",
  onSubmit,
  resolver,
  children,
}: StoryFormProps) {
  const methods = useForm({ defaultValues, mode, resolver });
  const [submitted, setSubmitted] = useState<unknown>(null);

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        noValidate
        // A real submit, so validation runs and the first invalid field is focused.
        onSubmit={methods.handleSubmit((data) => {
          setSubmitted(data);
          onSubmit?.(data);
          action("onSubmit")(data);
        })}
        p="md"
        maw={500}
      >
        {children}
        <FormStatePanel submitted={submitted} onReset={() => setSubmitted(null)} />
      </Box>
    </FormProvider>
  );
}
