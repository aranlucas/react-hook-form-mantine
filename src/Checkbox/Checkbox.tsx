import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { Checkbox as $Checkbox, type CheckboxProps as $CheckboxProps } from "@mantine/core";
import { CheckboxGroup } from "./CheckBoxGroup/CheckBoxGroup";

export type CheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$CheckboxProps, "checked" | "defaultValue">;

/** Standalone checkbox input with react-hook-form controller. For use inside `CheckboxGroup`, use `Checkbox.Item` to avoid double controller registration. */
export const Checkbox = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: CheckboxProps<T>) => {
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
    <$Checkbox
      error={fieldState.error?.message}
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...inputProps}
    />
  );
};

Checkbox.Group = CheckboxGroup;

Checkbox.Item = $Checkbox;
