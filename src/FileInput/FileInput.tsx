import { type UseControllerProps, useController } from "react-hook-form";
import {
  FileInput as $FileInput,
  type FileInputProps as $FileInputProps,
} from "@mantine/core";

export type FileInputProps = UseControllerProps & $FileInputProps;

export function FileInput({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: FileInputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$FileInput error={fieldState.error?.message} {...field} {...props} />;
}
