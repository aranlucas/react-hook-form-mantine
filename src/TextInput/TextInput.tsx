import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  TextInput as $TextInput,
  type TextInputProps as $TextInputProps,
} from "@mantine/core";

export type TextInputProps<T extends FieldValues> = UseControllerProps<T> &
  $TextInputProps;

export function TextInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: TextInputProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$TextInput error={fieldState.error?.message} {...field} {...props} />;
}
