import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Select as $Select, type SelectProps as $SelectProps } from "@mantine/core";

export type SelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SelectProps, "value" | "defaultValue">;

export function Select<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SelectProps<T>) {
  const {
    props: inputProps,
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useFieldController<T, typeof props>(
    {
      name,
      control,
      defaultValue,
      rules,
      shouldUnregister,
    },
    props,
  );

  return (
    <$Select
      value={value}
      onChange={(value, option) => {
        fieldOnChange(value);
        onChange?.(value, option);
      }}
      error={fieldState.error?.message}
      {...field}
      {...inputProps}
    />
  );
}
