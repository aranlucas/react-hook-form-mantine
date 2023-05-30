import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  JsonInput as $JsonInput,
  type JsonInputProps as $JsonInputProps,
} from "@mantine/core";

export type JsonInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$JsonInputProps, "value" | "defaultValue">;

export function JsonInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: JsonInputProps<T>) {
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
    <$JsonInput
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
