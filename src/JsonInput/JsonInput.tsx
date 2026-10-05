import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { JsonInput as $JsonInput, type JsonInputProps as $JsonInputProps } from "@mantine/core";

export type JsonInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$JsonInputProps, "value" | "defaultValue">;

export function JsonInput<T extends FieldValues>(props: JsonInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$JsonInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
