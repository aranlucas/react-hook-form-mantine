import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import { Input as $Input, type InputProps as $InputProps } from "@mantine/core";

export type InputProps<T extends FieldValues> = UseControllerProps<T> &
  $InputProps;

export function Input<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: InputProps<T>) {
  const {
    field: { value, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Input
      value={value}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
