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
  $CheckboxProps;
export type CheckboxGroupProps<T extends FieldValues> = UseControllerProps<T> &
  $CheckboxGroupProps;

export function Checkbox<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...mantineProps
}: CheckboxProps<T>) {
  const {
    field: { value, ...field },
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
      {...field}
      {...mantineProps}
    />
  );
}

Checkbox.Group = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: CheckboxGroupProps<T>) => {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Checkbox.Group error={fieldState.error?.message} {...field} {...props} />
  );
};

Checkbox.Item = $Checkbox;
