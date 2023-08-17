import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  DateTimePicker as $DateTimePicker,
  type DateTimePickerProps as $DateTimePickerProps,
} from "@mantine/dates";

export type DateTimePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DateTimePickerProps, "value" | "defaultValue">;

export function DateTimePicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DateTimePickerProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$DateTimePicker
      error={fieldState.error?.message}
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
