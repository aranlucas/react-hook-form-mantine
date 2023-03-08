import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Slider as $Slider,
  type SliderProps as $SliderProps,
} from "@mantine/core";

export type SliderProps<T extends FieldValues> = UseControllerProps<T> &
  $SliderProps;

export function Slider<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SliderProps<T>) {
  const { field } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Slider {...field} {...props} />;
}
