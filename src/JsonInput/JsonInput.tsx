import { type UseControllerProps, useController } from "react-hook-form";
import {
  JsonInput as $JsonInput,
  type JsonInputProps as $JsonInputProps,
} from "@mantine/core";

export type JsonInputProps = UseControllerProps & $JsonInputProps;

export function JsonInput({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: JsonInputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$JsonInput error={fieldState.error?.message} {...field} {...props} />;
}
