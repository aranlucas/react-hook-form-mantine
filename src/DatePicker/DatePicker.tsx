import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import {
  DatePicker as $DatePicker,
  type DatePickerProps as $DatePickerProps,
  type DatePickerType,
} from "@mantine/dates";

export type DatePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DatePickerProps<DatePickerType>, "value" | "defaultValue">;

export function DatePicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DatePickerProps<T>) {
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
    <$DatePicker
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
