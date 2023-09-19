import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  SwitchGroup as $SwitchGroup,
  type SwitchGroupProps as $SwitchGroupProps,
} from "@mantine/core";

export type SwitchGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SwitchGroupProps, "value" | "checked" | "defaultValue">;

export function SwitchGroup<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SwitchGroupProps<T>) {
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
    <$SwitchGroup
      value={value}
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
