import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import {
  AngleSlider as $AngleSlider,
  type AngleSliderProps as $AngleSliderProps,
} from "@mantine/core";

export type AngleSliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$AngleSliderProps, "value" | "defaultValue">;

export function AngleSlider<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: AngleSliderProps<T>) {
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
    <$AngleSlider
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
