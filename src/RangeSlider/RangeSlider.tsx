import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import {
  RangeSlider as $RangeSlider,
  type RangeSliderProps as $RangeSliderProps,
} from "@mantine/core";

export type RangeSliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RangeSliderProps, "value" | "defaultValue">;

export function RangeSlider<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: RangeSliderProps<T>) {
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
    <$RangeSlider
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
