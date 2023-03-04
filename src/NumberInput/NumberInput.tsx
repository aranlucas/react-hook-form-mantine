import { type UseControllerProps, useController } from "react-hook-form";
import {
  NumberInput as $NumberInput,
  type NumberInputProps as $NumberInputProps,
} from "@mantine/core";

export type NumberInputProps = UseControllerProps & $NumberInputProps;

export function NumberInput({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: NumberInputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return (
    <$NumberInput error={fieldState.error?.message} {...field} {...props} />
  );
}
