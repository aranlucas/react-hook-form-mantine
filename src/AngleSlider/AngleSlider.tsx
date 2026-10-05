import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  AngleSlider as $AngleSlider,
  type AngleSliderProps as $AngleSliderProps,
} from "@mantine/core";

export type AngleSliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$AngleSliderProps, "value" | "defaultValue">;

export function AngleSlider<T extends FieldValues>(props: AngleSliderProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$AngleSlider {...field} {...inputProps} />;
}
