import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  PinInput as $PinInput,
  type PinInputProps as $PinInputProps,
} from "@mantine/core";

export type PinInputProps<T extends FieldValues> = UseControllerProps<T> &
  $PinInputProps;

export function PinInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: PinInputProps<T>) {
  const { field, fieldState } = useController<T>({
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
