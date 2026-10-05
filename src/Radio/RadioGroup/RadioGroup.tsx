import { useFieldController } from "../../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { RadioGroup as $RadioGroup, type RadioGroupProps as $RadioGroupProps } from "@mantine/core";

export type RadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RadioGroupProps, "value" | "defaultValue">;

/** Radio group that manages selection state via react-hook-form. Children should use `Radio.Item` (raw Mantine Radio), not the wrapped `Radio` component. */
export function RadioGroup<T extends FieldValues>(props: RadioGroupProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$RadioGroup {...field} error={fieldState.error?.message} {...inputProps} />;
}
