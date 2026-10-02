import { useFieldController } from "../../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { RadioGroup as $RadioGroup, type RadioGroupProps as $RadioGroupProps } from "@mantine/core";

export type RadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RadioGroupProps, "value" | "defaultValue">;

/** Radio group that manages selection state via react-hook-form. Children should use `Radio.Item` (raw Mantine Radio), not the wrapped `Radio` component. */
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
    <$RadioGroup
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={fieldState.error?.message}
      {...field}
      {...inputProps}
    />
  );
}
