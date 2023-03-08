import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  NumberInput as $NumberInput,
  type NumberInputProps as $NumberInputProps,
} from "@mantine/core";

export type NumberInputProps<T extends FieldValues> = UseControllerProps<T> &
  $NumberInputProps;

export function NumberInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: NumberInputProps<T>) {
  const { field, fieldState } = useController<T>({
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
