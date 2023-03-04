import { type UseControllerProps, useController } from "react-hook-form";
import {
  ColorInput as $ColorInput,
  type ColorInputProps as $ColorInputProps,
} from "@mantine/core";

export type ColorInputProps = UseControllerProps & $ColorInputProps;

export function ColorInput({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ColorInputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$ColorInput error={fieldState.error?.message} {...field} {...props} />
  );
}
