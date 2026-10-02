import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
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
    props: inputProps,
    field: { value, onChange: fieldOnChange, ...field },
  } = useFieldController<T, typeof props>(
    {
      name,
      control,
      defaultValue,
      rules,
      shouldUnregister,
    },
    props,
  );

  return (
    <$ColorPicker
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...inputProps}
    />
  );
}
