import { type UseControllerProps, useController } from "react-hook-form";
import {
  PasswordInput as $PasswordInput,
  type PasswordInputProps as $PasswordInputProps,
} from "@mantine/core";

export type PasswordInputProps = UseControllerProps & $PasswordInputProps;

export function PasswordInput({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: PasswordInputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return (
    <$PasswordInput error={fieldState.error?.message} {...field} {...props} />
  );
}
