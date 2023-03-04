import { type UseControllerProps, useController } from "react-hook-form";
import {
  NativeSelect as $NativeSelect,
  type NativeSelectProps as $NativeSelectProps,
} from "@mantine/core";

export type NativeSelectProps = UseControllerProps & $NativeSelectProps;

export function NativeSelect({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: NativeSelectProps) {
  const { field, fieldState } = useController({
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
