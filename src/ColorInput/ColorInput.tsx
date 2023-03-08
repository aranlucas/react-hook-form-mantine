import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  ColorInput as $ColorInput,
  type ColorInputProps as $ColorInputProps,
} from "@mantine/core";

export type ColorInputProps<T extends FieldValues> = UseControllerProps<T> &
  $ColorInputProps;

export function ColorInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ColorInputProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$ColorInput error={fieldState.error?.message} {...field} {...props} />
  );
}
