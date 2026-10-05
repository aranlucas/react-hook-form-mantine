import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import {
  NativeSelect as $NativeSelect,
  type NativeSelectProps as $NativeSelectProps,
} from "@mantine/core";

export type NativeSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$NativeSelectProps, "value" | "defaultValue">;

export function NativeSelect<T extends FieldValues>(props: NativeSelectProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$NativeSelect {...field} error={fieldState.error?.message} {...inputProps} />;
}
