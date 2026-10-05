import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import {
  MultiSelect as $MultiSelect,
  type MultiSelectProps as $MultiSelectProps,
} from "@mantine/core";

export type MultiSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MultiSelectProps, "value" | "defaultValue">;

export function MultiSelect<T extends FieldValues>(props: MultiSelectProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$MultiSelect {...field} error={fieldState.error?.message} {...inputProps} />;
}
