import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { FileInput as $FileInput, type FileInputProps as $FileInputProps } from "@mantine/core";

export type FileInputProps<
  T extends FieldValues,
  Multiple extends boolean = false,
> = UseControllerProps<T> & Omit<$FileInputProps<Multiple>, "value" | "defaultValue">;

export function FileInput<T extends FieldValues, Multiple extends boolean = false>(
  props: FileInputProps<T, Multiple>,
) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$FileInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
