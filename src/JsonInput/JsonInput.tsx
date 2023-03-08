import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  JsonInput as $JsonInput,
  type JsonInputProps as $JsonInputProps,
} from "@mantine/core";

export type JsonInputProps<T extends FieldValues> = UseControllerProps<T> &
  $JsonInputProps;

export function JsonInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: JsonInputProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$JsonInput error={fieldState.error?.message} {...field} {...props} />;
}
