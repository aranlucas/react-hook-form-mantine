import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { TreeSelect as $TreeSelect, type TreeSelectProps as $TreeSelectProps } from "@mantine/core";

export type TreeSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TreeSelectProps, "value" | "defaultValue">;

export function TreeSelect<T extends FieldValues>(props: TreeSelectProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$TreeSelect {...field} error={fieldState.error?.message} {...inputProps} />;
}
