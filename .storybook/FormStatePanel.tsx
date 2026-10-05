import { Badge, Button, Card, Code, Group, Stack, Text } from "@mantine/core";
import { useFormContext, useFormState, useWatch } from "react-hook-form";

type FormStatePanelProps = {
  /** Values from the last successful submit, or null. */
  submitted: unknown;
  onReset: () => void;
};

export const FormStatePanel = ({ submitted, onReset }: FormStatePanelProps) => {
  const { control, reset } = useFormContext();
  const values = useWatch({ control });

  const { isDirty, isValid, errors, touchedFields, dirtyFields } = useFormState({
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
    <Card
      withBorder
      radius="md"
      padding="sm"
      mt="md"
      style={{ backgroundColor: "var(--mantine-color-gray-0)" }}
    >
      <Group justify="space-between" wrap="nowrap" mb="xs">
        <Group gap="xs" wrap="nowrap">
          <Badge size="sm" variant="light" color={isDirty ? "yellow" : "gray"}>
            {isDirty ? "Dirty" : "Pristine"}
          </Badge>
          <Badge size="sm" variant="light" color={isValid ? "green" : "red"}>
            {isValid ? "Valid" : "Invalid"}
          </Badge>
          {errorCount > 0 && (
            <Badge size="sm" variant="light" color="red">
              {errorCount} error{errorCount === 1 ? "" : "s"}
            </Badge>
          )}
          {touchedCount > 0 && (
            <Badge size="sm" variant="light" color="blue">
              {touchedCount} touched
            </Badge>
          )}
          {dirtyCount > 0 && (
            <Badge size="sm" variant="light" color="yellow">
              {dirtyCount} dirty
            </Badge>
          )}
        </Group>
        <Group gap="xs" wrap="nowrap">
          <Button size="compact-xs" variant="light" onClick={handleReset}>
            Reset
          </Button>
          <Button size="compact-xs" variant="filled" type="submit">
            Submit
          </Button>
        </Group>
      </Group>
      <Stack gap="xs">
        <div>
          <Text size="xs" fw={500} c="dimmed">
            values
          </Text>
          <Code block fz="xs">
            {JSON.stringify(values, null, 2)}
          </Code>
        </div>
        {errorCount > 0 && (
          <div>
            <Text size="xs" fw={500} c="red">
              errors
            </Text>
            <Code block fz="xs" color="red">
              {JSON.stringify(errors, null, 2)}
            </Code>
          </div>
        )}
        {submitted !== null && (
          <div>
            <Text size="xs" fw={500} c="green">
              onSubmit result
            </Text>
            <Code block fz="xs" color="teal">
              {JSON.stringify(submitted, null, 2)}
            </Code>
          </div>
        )}
      </Stack>
    </Card>
  );
};
