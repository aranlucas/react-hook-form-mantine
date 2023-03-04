import { type UseControllerProps, useController } from "react-hook-form";
import {
  Slider as $Slider,
  type SliderProps as $SliderProps,
} from "@mantine/core";

export type SliderProps = UseControllerProps & $SliderProps;

export function Slider({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SliderProps) {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Slider {...field} {...props} />;
}
