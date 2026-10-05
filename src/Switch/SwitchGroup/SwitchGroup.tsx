import { useFieldController } from "../../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import {
  SwitchGroup as $SwitchGroup,
  type SwitchGroupProps as $SwitchGroupProps,
} from "@mantine/core";

export type SwitchGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SwitchGroupProps, "value" | "checked" | "defaultValue">;

export function SwitchGroup<T extends FieldValues>(props: SwitchGroupProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$SwitchGroup {...field} error={fieldState.error?.message} {...inputProps} />;
}
