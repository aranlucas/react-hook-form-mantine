import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  Checkbox as $Checkbox,
  type CheckboxProps as $CheckboxProps,
  type CheckboxGroupProps as $CheckboxGroupProps,
} from "@mantine/core";

export type CheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$CheckboxProps, "checked" | "defaultValue">;
export type CheckboxGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$CheckboxGroupProps, "checked" | "defaultValue">;

export function Checkbox<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: CheckboxProps<T>) {
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
    <$Checkbox
      error={fieldState.error?.message}
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
}

Checkbox.Group = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: CheckboxGroupProps<T>) => {
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
    <$Checkbox.Group
      error={fieldState.error?.message}
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
};

Checkbox.Item = $Checkbox;
