import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Slider as $Slider, type SliderProps as $SliderProps } from "@mantine/core";

export type SliderProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SliderProps, "value" | "defaultValue">;

export function Slider<T extends FieldValues>(props: SliderProps<T>) {
  const { field, props: inputProps } = useFieldController(props);

  return <$Slider {...field} {...inputProps} />;
}
