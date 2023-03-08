import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  PasswordInput as $PasswordInput,
  type PasswordInputProps as $PasswordInputProps,
} from "@mantine/core";

export type PasswordInputProps<T extends FieldValues> = UseControllerProps<T> &
  $PasswordInputProps;

export function PasswordInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: PasswordInputProps<T>) {
  const { field, fieldState } = useController<T>({
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
