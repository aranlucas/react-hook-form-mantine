import { Box, Button, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { type ReactNode, useCallback, useRef, useState } from "react";
import {
  type FieldValues,
  FormProvider,
  type Resolver,
  useFormContext,
  useForm,
  useFormState,
} from "react-hook-form";
import { action } from "storybook/actions";
import { FormBridge } from "./form-addon/FormBridge";

export type StoryFormParameters = {
  defaultValues?: FieldValues;
  mode?: "onSubmit" | "onBlur" | "onChange" | "onTouched" | "all";
  onSubmit?: (data: FieldValues) => void;
};

type StoryFormProps = StoryFormParameters & {
  storyId: string;
  resolver?: Resolver;
  children: ReactNode;
};

/** One line on where the form stands, announced to screen readers as it changes. */
function FormStatus() {
  const { control } = useFormContext();
  const { errors, isDirty, isSubmitSuccessful } = useFormState({ control });
  const errorCount = Object.keys(errors).length;

  let status = "No changes";

  if (errorCount > 0) status = `Fix ${errorCount} ${errorCount === 1 ? "error" : "errors"}`;
  else if (isSubmitSuccessful) status = "Submitted";
  else if (isDirty) status = "Unsaved changes";

  return (
    <Text size="sm" c={errorCount > 0 ? "var(--mantine-color-error)" : "dimmed"} role="status">
      {status}
    </Text>
  );
}

/** The form every component story renders in. Its state is in the Form panel. */
export function StoryForm({
  storyId,
  defaultValues,
  mode = "onChange",
  onSubmit,
  resolver,
  children,
}: StoryFormProps) {
  const methods = useForm({ defaultValues, mode, resolver });
  const [submitted, setSubmitted] = useState<FieldValues | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { reset } = methods;

  const handleReset = useCallback(() => {
    reset();
    setSubmitted(null);
  }, [reset]);

  return (
    <FormProvider {...methods}>
      <Box p="lg" maw={560}>
        <Paper
          ref={formRef}
          component="form"
          noValidate
          withBorder
          radius="md"
          p="lg"
          shadow="xs"
          // A real submit, so validation runs and the first invalid field is focused.
          onSubmit={methods.handleSubmit((data) => {
            setSubmitted(data);
            onSubmit?.(data);
            action("onSubmit")(data);
          })}
        >
          <Stack gap="md">{children}</Stack>
          <Divider my="lg" />
          <Group justify="space-between" wrap="nowrap">
            <FormStatus />
            <Group gap="xs" wrap="nowrap">
              <Button variant="default" onClick={handleReset}>
                Reset
              </Button>
              <Button type="submit">Submit</Button>
            </Group>
          </Group>
        </Paper>
      </Box>
      <FormBridge
        storyId={storyId}
        mode={mode}
        submitted={submitted}
        formRef={formRef}
        onReset={handleReset}
      />
    </FormProvider>
  );
}
