import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Select as $Select, type SelectProps as $SelectProps } from "@mantine/core";

export type SelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SelectProps, "value" | "defaultValue">;

export function Select<T extends FieldValues>(props: SelectProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$Select {...field} error={fieldState.error?.message} {...inputProps} />;
}
