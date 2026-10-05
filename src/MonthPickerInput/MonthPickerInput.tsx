import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  MonthPickerInput as $MonthPickerInput,
  type MonthPickerInputProps as $MonthPickerInputProps,
  type DatePickerType,
} from "@mantine/dates";

export type MonthPickerInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MonthPickerInputProps<DatePickerType>, "value" | "defaultValue">;

export function MonthPickerInput<T extends FieldValues>(props: MonthPickerInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$MonthPickerInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
