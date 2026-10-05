import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Input as $Input, type InputProps as $InputProps } from "@mantine/core";

export type InputProps<T extends FieldValues> = UseControllerProps<T> & $InputProps;

export function Input<T extends FieldValues>(props: InputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$Input {...field} error={fieldState.error?.message} {...inputProps} />;
}
