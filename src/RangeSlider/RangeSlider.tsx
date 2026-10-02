import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
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
    <$RangeSlider
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
