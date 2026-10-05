import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { PinInput as $PinInput, type PinInputProps as $PinInputProps } from "@mantine/core";

export type PinInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$PinInputProps, "value" | "defaultValue">;

export function PinInput<T extends FieldValues>(props: PinInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$PinInput {...field} error={!!fieldState.error} {...inputProps} />;
}
