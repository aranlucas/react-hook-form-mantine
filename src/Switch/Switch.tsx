import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Switch as $Switch, type SwitchProps as $SwitchProps } from "@mantine/core";
import { SwitchGroup } from "./SwitchGroup/SwitchGroup";

export type SwitchProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SwitchProps, "value" | "checked" | "defaultValue">;

export function Switch<T extends FieldValues>(props: SwitchProps<T>) {
  const {
    field: { value, ...field },
    fieldState,
    props: inputProps,
  } = useFieldController(props);

  return <$Switch checked={value} {...field} error={fieldState.error?.message} {...inputProps} />;
}

Switch.Item = $Switch;

Switch.Group = SwitchGroup;
