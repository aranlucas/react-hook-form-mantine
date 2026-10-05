import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import {
  NumberInput as $NumberInput,
  type NumberInputProps as $NumberInputProps,
} from "@mantine/core";

export type NumberInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$NumberInputProps, "value" | "defaultValue">;

export function NumberInput<T extends FieldValues>(props: NumberInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$NumberInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
