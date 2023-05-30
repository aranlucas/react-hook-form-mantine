import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  ColorPicker as $ColorPicker,
  type ColorPickerProps as $ColorPickerProps,
} from "@mantine/core";

export type ColorPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ColorPickerProps, "value" | "defaultValue">;

export function ColorPicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ColorPickerProps<T>) {
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
    <$ColorPicker
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
