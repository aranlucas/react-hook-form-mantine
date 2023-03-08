import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  FileInput as $FileInput,
  type FileInputProps as $FileInputProps,
} from "@mantine/core";

export type FileInputProps<T extends FieldValues> = UseControllerProps<T> &
  $FileInputProps;

export function FileInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: FileInputProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$FileInput error={fieldState.error?.message} {...field} {...props} />;
}
