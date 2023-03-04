import { type UseControllerProps, useController } from "react-hook-form";
import {
  ColorPicker as $ColorPicker,
  type ColorPickerProps as $ColorPickerProps,
} from "@mantine/core";

export type ColorPickerProps = UseControllerProps & $ColorPickerProps;

export function ColorPicker({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ColorPickerProps) {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$ColorPicker {...field} {...props} />;
}
