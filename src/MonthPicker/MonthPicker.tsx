import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  MonthPicker as $MonthPicker,
  type DatePickerType,
  type MonthPickerProps as $MonthPickerProps,
} from "@mantine/dates";

export type MonthPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MonthPickerProps<DatePickerType>, "value" | "defaultValue">;

export function MonthPicker<T extends FieldValues>(props: MonthPickerProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$MonthPicker {...field} {...inputProps} />;
}
