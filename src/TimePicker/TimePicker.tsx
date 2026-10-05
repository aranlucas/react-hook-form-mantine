import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  TimePicker as $TimePicker,
  type TimePickerProps as $TimePickerProps,
} from "@mantine/dates";

export type TimePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TimePickerProps, "value" | "defaultValue">;

export function TimePicker<T extends FieldValues>(props: TimePickerProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$TimePicker {...field} error={fieldState.error?.message} {...inputProps} />;
}
