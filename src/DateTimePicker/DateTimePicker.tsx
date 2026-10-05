import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  DateTimePicker as $DateTimePicker,
  type DateTimePickerProps as $DateTimePickerProps,
} from "@mantine/dates";

export type DateTimePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DateTimePickerProps, "value" | "defaultValue">;

export function DateTimePicker<T extends FieldValues>(props: DateTimePickerProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$DateTimePicker {...field} error={fieldState.error?.message} {...inputProps} />;
}
