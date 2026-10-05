import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  DatePicker as $DatePicker,
  type DatePickerProps as $DatePickerProps,
  type DatePickerType,
} from "@mantine/dates";

export type DatePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DatePickerProps<DatePickerType>, "value" | "defaultValue">;

export function DatePicker<T extends FieldValues>(props: DatePickerProps<T>) {
  const { field, props: inputProps } = useFieldController(props);

  return <$DatePicker {...field} {...inputProps} />;
}
