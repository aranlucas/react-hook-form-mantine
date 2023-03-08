import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  MultiSelect as $MultiSelect,
  type MultiSelectProps as $MultiSelectProps,
} from "@mantine/core";

export type MultiSelectProps<T extends FieldValues> = UseControllerProps<T> &
  $MultiSelectProps;

export function MultiSelect<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: MultiSelectProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return (
    <$MultiSelect error={fieldState.error?.message} {...field} {...props} />
  );
}
