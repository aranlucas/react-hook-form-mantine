import { type UseControllerProps, useController } from "react-hook-form";
import {
  Select as $Select,
  type SelectProps as $SelectProps,
} from "@mantine/core";

export type SelectProps = UseControllerProps & $SelectProps;

export function Select({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SelectProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Select error={fieldState.error?.message} {...field} {...props} />;
}
