import { type UseControllerProps, useController } from "react-hook-form";
import {
  PinInput as $PinInput,
  type PinInputProps as $PinInputProps,
} from "@mantine/core";

export type PinInputProps = UseControllerProps & $PinInputProps;

export function PinInput({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: PinInputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return (
    <$PinInput
      error={!(fieldState.error?.message == null)}
      {...field}
      {...props}
    />
  );
}
