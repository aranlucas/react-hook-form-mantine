import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { MaskInput as $MaskInput, type MaskInputProps as $MaskInputProps } from "@mantine/core";

export type MaskInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MaskInputProps, "value" | "defaultValue">;

export function MaskInput<T extends FieldValues>(props: MaskInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$MaskInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
