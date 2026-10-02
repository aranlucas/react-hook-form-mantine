import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Input as $Input, type InputProps as $InputProps } from "@mantine/core";

export type InputProps<T extends FieldValues> = UseControllerProps<T> & $InputProps;

export function Input<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: InputProps<T>) {
  const {
    props: inputProps,
    field: { value, ...field },
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

  return <$Input value={value} error={fieldState.error?.message} {...field} {...inputProps} />;
}
