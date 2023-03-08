import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Select as $Select,
  type SelectProps as $SelectProps,
} from "@mantine/core";

export type SelectProps<T extends FieldValues> = UseControllerProps<T> &
  $SelectProps;

export function Select<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SelectProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Select error={fieldState.error?.message} {...field} {...props} />;
}
