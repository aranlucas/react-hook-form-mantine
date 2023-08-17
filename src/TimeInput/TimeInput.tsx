import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  TimeInput as $TimeInput,
  type TimeInputProps as $TimeInputProps,
} from "@mantine/dates";

export type TimeInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TimeInputProps, "value" | "defaultValue">;

export function TimeInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TimeInputProps<T>) {
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
    <$TimeInput
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
