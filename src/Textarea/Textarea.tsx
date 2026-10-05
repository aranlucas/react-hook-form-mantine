import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Textarea as $Textarea, type TextareaProps as $TextareaProps } from "@mantine/core";

export type TextareaProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TextareaProps, "value" | "defaultValue">;

export function Textarea<T extends FieldValues>(props: TextareaProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$Textarea {...field} error={fieldState.error?.message} {...inputProps} />;
}
