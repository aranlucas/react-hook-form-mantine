import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { HueSlider as $HueSlider, type HueSliderProps as $HueSliderProps } from "@mantine/core";

export type HueSliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$HueSliderProps, "value" | "defaultValue">;

export function HueSlider<T extends FieldValues>(props: HueSliderProps<T>) {
  const { field, props: inputProps } = useFieldController(props);

  return <$HueSlider {...field} {...inputProps} />;
}
