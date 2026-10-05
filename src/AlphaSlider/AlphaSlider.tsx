import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  AlphaSlider as $AlphaSlider,
  type AlphaSliderProps as $AlphaSliderProps,
} from "@mantine/core";

export type AlphaSliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$AlphaSliderProps, "value" | "defaultValue">;

export function AlphaSlider<T extends FieldValues>(props: AlphaSliderProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$AlphaSlider {...field} {...inputProps} />;
}
