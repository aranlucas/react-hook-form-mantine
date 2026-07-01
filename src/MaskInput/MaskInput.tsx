import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import { MaskInput as $MaskInput, type MaskInputProps as $MaskInputProps } from "@mantine/core";

export type MaskInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MaskInputProps, "value" | "defaultValue">;

export function MaskInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MaskInputProps<T>) {
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
    <$MaskInput
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
