import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  DatePickerInput as $DatePickerInput,
  type DatePickerType,
  type DatePickerInputProps as $DatePickerInputProps,
} from "@mantine/dates";

export type DatePickerInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DatePickerInputProps<DatePickerType>, "value" | "defaultValue">;

export function DatePickerInput<T extends FieldValues>(props: DatePickerInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$DatePickerInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
