import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Switch as $Switch,
  type SwitchProps as $SwitchProps,
} from "@mantine/core";
import { SwitchGroup } from "./SwitchGroup/SwitchGroup";

export type SwitchProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SwitchProps, "value" | "checked" | "defaultValue">;

export function Switch<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SwitchProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Switch
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}

Switch.Item = $Switch;
Switch.Group = SwitchGroup;
