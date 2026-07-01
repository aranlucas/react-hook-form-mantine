import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import { HueSlider as $HueSlider, type HueSliderProps as $HueSliderProps } from "@mantine/core";

export type HueSliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$HueSliderProps, "value" | "defaultValue">;

export function HueSlider<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: HueSliderProps<T>) {
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
    <$HueSlider
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
