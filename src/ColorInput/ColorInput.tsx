import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { ColorInput as $ColorInput, type ColorInputProps as $ColorInputProps } from "@mantine/core";

export type ColorInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ColorInputProps, "value" | "defaultValue">;

export function ColorInput<T extends FieldValues>(props: ColorInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$ColorInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
