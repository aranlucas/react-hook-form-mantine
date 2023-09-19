import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  RadioGroup as $RadioGroup,
  type RadioGroupProps as $RadioGroupProps,
} from "@mantine/core";

export type RadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RadioGroupProps, "value" | "defaultValue">;

export function RadioGroup<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: RadioGroupProps<T>) {
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
    <$RadioGroup
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
