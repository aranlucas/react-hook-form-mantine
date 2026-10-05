import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { TextInput as $TextInput, type TextInputProps as $TextInputProps } from "@mantine/core";

export type TextInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TextInputProps, "value" | "defaultValue">;

export function TextInput<T extends FieldValues>(props: TextInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$TextInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
