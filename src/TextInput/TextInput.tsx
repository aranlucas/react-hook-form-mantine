import { type UseControllerProps, useController } from "react-hook-form";
import {
  TextInput as $TextInput,
  type TextInputProps as $TextInputProps,
} from "@mantine/core";

export type TextInputProps = UseControllerProps & $TextInputProps;

export function TextInput({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: TextInputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$TextInput error={fieldState.error?.message} {...field} {...props} />;
}
