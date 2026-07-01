import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import {
  AlphaSlider as $AlphaSlider,
  type AlphaSliderProps as $AlphaSliderProps,
} from "@mantine/core";

export type AlphaSliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$AlphaSliderProps, "value" | "defaultValue">;

export function AlphaSlider<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: AlphaSliderProps<T>) {
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
    <$AlphaSlider
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
