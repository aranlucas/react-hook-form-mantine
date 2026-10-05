import { Badge, Button, Code, Divider, Group, Paper, Stack, Text, Tooltip } from "@mantine/core";
import {
  type FieldErrors,
  type FieldValues,
  useFormContext,
  useFormState,
  useWatch,
} from "react-hook-form";

type FormStatePanelProps = {
  /** Values from the last successful submit, or null. */
  submitted: FieldValues | null;
  onReset: () => void;
};

/** Form data as JSON. Errors drop their DOM `ref`, and files show their name. */
const json = (value: FieldValues | FieldErrors) =>
  JSON.stringify(
    value,
    (key, item) => {
      if (key === "ref") return undefined;

      if (item instanceof File) return `File(${item.name})`;

      return item;
    },
    2,
  );

const Section = ({ label, value }: { label: string; value: FieldValues | FieldErrors }) => (
  <div>
    <Text size="xs" fw={600} tt="uppercase" c="dimmed" mb={4} style={{ letterSpacing: 0.5 }}>
      {label}
    </Text>
    <Code
      block
      fz="xs"
      style={{
        background: "light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))",
        border: "1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4))",
      }}
    >
      {json(value)}
    </Code>
  </div>
);

export const FormStatePanel = ({ submitted, onReset }: FormStatePanelProps) => {
  const { control, reset } = useFormContext();
  const values = useWatch({ control });

  const { isDirty, isValid, errors, touchedFields, dirtyFields, submitCount } = useFormState({
    control,
  });

  const handleReset = () => {
    reset();
    onReset();
  };

  const errorCount = Object.keys(errors).length;
  const touchedCount = Object.keys(touchedFields).length;
  const dirtyCount = Object.keys(dirtyFields).length;

  return (
    <Paper
      withBorder
      radius="md"
      p="sm"
      mt="lg"
      aria-label="Form state"
      component="section"
      style={{ background: "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7))" }}
    >
      <Group justify="space-between" wrap="nowrap" gap="xs">
        <Group gap={6}>
          <Badge size="sm" variant="dot" color={isValid ? "teal" : "red"}>
            {isValid ? "Valid" : "Invalid"}
          </Badge>
          <Badge size="sm" variant="dot" color={isDirty ? "yellow" : "gray"}>
            {isDirty ? "Dirty" : "Pristine"}
          </Badge>
          {errorCount > 0 && (
            <Badge size="sm" variant="dot" color="red">
              {errorCount} error{errorCount === 1 ? "" : "s"}
            </Badge>
          )}
          {touchedCount > 0 && (
            <Badge size="sm" variant="dot" color="blue">
              {touchedCount} touched
            </Badge>
          )}
          {dirtyCount > 0 && (
            <Badge size="sm" variant="dot" color="yellow">
              {dirtyCount} dirty
            </Badge>
          )}
          {submitCount > 0 && (
            <Tooltip label="formState.submitCount">
              <Badge size="sm" variant="dot" color="gray">
                {submitCount}× submitted
              </Badge>
            </Tooltip>
          )}
        </Group>
        <Group gap="xs" wrap="nowrap">
          <Button size="compact-sm" variant="default" onClick={handleReset}>
            Reset
          </Button>
          <Button size="compact-sm" type="submit">
            Submit
          </Button>
        </Group>
      </Group>
      <Divider my="sm" />
      <Stack gap="sm">
        <Section label="values" value={values} />
        {errorCount > 0 && <Section label="errors" value={errors} />}
        {submitted !== null && <Section label="onSubmit result" value={submitted} />}
      </Stack>
    </Paper>
  );
};
