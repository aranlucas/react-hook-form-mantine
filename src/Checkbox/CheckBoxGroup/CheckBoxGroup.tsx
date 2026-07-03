import {
  type CheckboxGroupProps as $CheckboxGroupProps,
  CheckboxGroup as $CheckboxGroup,
} from "@mantine/core";
import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";

export type CheckboxGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$CheckboxGroupProps, "checked" | "defaultValue">;

/** Checkbox group that manages selection state via react-hook-form. Children should use `Checkbox.Item` (raw Mantine Checkbox), not the wrapped `Checkbox` component. */
export const CheckboxGroup = <T extends FieldValues>({
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
    <$CheckboxGroup
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
