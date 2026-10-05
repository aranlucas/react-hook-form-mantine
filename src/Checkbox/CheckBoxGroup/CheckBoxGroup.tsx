import { useFieldController } from "../../internal/useFieldController";
import {
  type CheckboxGroupProps as $CheckboxGroupProps,
  CheckboxGroup as $CheckboxGroup,
} from "@mantine/core";
import { type FieldValues, type UseControllerProps } from "react-hook-form";

export type CheckboxGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$CheckboxGroupProps, "checked" | "defaultValue">;

/** Checkbox group that manages selection state via react-hook-form. Children should use `Checkbox.Item` (raw Mantine Checkbox), not the wrapped `Checkbox` component. */
export const CheckboxGroup = <T extends FieldValues>(props: CheckboxGroupProps<T>) => {
  const { field, fieldState, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$CheckboxGroup {...field} error={fieldState.error?.message} {...inputProps} />;
};
