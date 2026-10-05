import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  RangeSlider as $RangeSlider,
  type RangeSliderProps as $RangeSliderProps,
} from "@mantine/core";

export type RangeSliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RangeSliderProps, "value" | "defaultValue">;

export function RangeSlider<T extends FieldValues>(props: RangeSliderProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$RangeSlider {...field} {...inputProps} />;
}
