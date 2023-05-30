import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  ColorInput as $ColorInput,
  type ColorInputProps as $ColorInputProps,
} from "@mantine/core";

export type ColorInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ColorInputProps, "value" | "defaultValue">;

export function ColorInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ColorInputProps<T>) {
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
    <$ColorInput
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
