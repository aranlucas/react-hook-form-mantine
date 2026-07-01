import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import {
  YearPicker as $YearPicker,
  type DatePickerType,
  type YearPickerProps as $YearPickerProps,
} from "@mantine/dates";

export type YearPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$YearPickerProps<DatePickerType>, "value" | "defaultValue">;

export function YearPicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: YearPickerProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$YearPicker
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
}
