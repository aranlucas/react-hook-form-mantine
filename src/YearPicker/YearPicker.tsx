import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  YearPicker as $YearPicker,
  type DatePickerType,
  type YearPickerProps as $YearPickerProps,
} from "@mantine/dates";

export type YearPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$YearPickerProps<DatePickerType>, "value" | "defaultValue">;

export function YearPicker<T extends FieldValues>(props: YearPickerProps<T>) {
  const { field, props: inputProps } = useFieldController(props);

  return <$YearPicker {...field} {...inputProps} />;
}
