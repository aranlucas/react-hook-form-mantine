import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import { TreeSelect as $TreeSelect, type TreeSelectProps as $TreeSelectProps } from "@mantine/core";

export type TreeSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TreeSelectProps, "value" | "defaultValue">;

export function TreeSelect<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TreeSelectProps<T>) {
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
    <$TreeSelect
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
}
