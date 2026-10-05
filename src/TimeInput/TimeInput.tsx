import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { TimeInput as $TimeInput, type TimeInputProps as $TimeInputProps } from "@mantine/dates";

export type TimeInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TimeInputProps, "value" | "defaultValue">;

export function TimeInput<T extends FieldValues>(props: TimeInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$TimeInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
