import { type UseControllerProps, useController } from "react-hook-form";
import {
  MultiSelect as $MultiSelect,
  type MultiSelectProps as $MultiSelectProps,
} from "@mantine/core";

export type MultiSelectProps = UseControllerProps & $MultiSelectProps;

export function MultiSelect({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: MultiSelectProps) {
  const { field, fieldState } = useController({
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
