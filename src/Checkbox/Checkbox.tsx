import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { Checkbox as $Checkbox, type CheckboxProps as $CheckboxProps } from "@mantine/core";
import { CheckboxGroup } from "./CheckBoxGroup/CheckBoxGroup";

export type CheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$CheckboxProps, "checked" | "defaultValue">;

/** Standalone checkbox input with react-hook-form controller. For use inside `CheckboxGroup`, use `Checkbox.Item` to avoid double controller registration. */
export const Checkbox = <T extends FieldValues>(props: CheckboxProps<T>) => {
  const {
    field: { value, ...field },
    fieldState,
    props: inputProps,
  } = useFieldController(props);

  return <$Checkbox checked={value} {...field} error={fieldState.error?.message} {...inputProps} />;
};

Checkbox.Group = CheckboxGroup;

Checkbox.Item = $Checkbox;
