import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import {
  InlineDateTimePicker as $InlineDateTimePicker,
  type InlineDateTimePickerProps as $InlineDateTimePickerProps,
} from "@mantine/dates";

export type InlineDateTimePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$InlineDateTimePickerProps, "value" | "defaultValue">;

export function InlineDateTimePicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: InlineDateTimePickerProps<T>) {
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
    <$InlineDateTimePicker
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
