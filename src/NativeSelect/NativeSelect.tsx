import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  NativeSelect as $NativeSelect,
  type NativeSelectProps as $NativeSelectProps,
} from "@mantine/core";

export type NativeSelectProps<T extends FieldValues> = UseControllerProps<T> &
  $NativeSelectProps;

export function NativeSelect<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: NativeSelectProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return (
    <$NativeSelect error={fieldState.error?.message} {...field} {...props} />
  );
}
