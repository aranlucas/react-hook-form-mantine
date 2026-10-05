import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  YearPickerInput as $YearPickerInput,
  type DatePickerType,
  type YearPickerInputProps as $YearPickerInputProps,
} from "@mantine/dates";

export type YearPickerInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$YearPickerInputProps<DatePickerType>, "value" | "defaultValue">;

export function YearPickerInput<T extends FieldValues>(props: YearPickerInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$YearPickerInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
