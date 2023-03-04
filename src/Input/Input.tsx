import { type UseControllerProps, useController } from "react-hook-form";
import { Input as $Input, type InputProps as $InputProps } from "@mantine/core";

type InputProps = UseControllerProps & $InputProps;

export function Input({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: InputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Input error={fieldState.error?.message} {...field} {...props} />;
}
