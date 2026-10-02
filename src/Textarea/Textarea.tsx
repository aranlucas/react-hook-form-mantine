import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Textarea as $Textarea, type TextareaProps as $TextareaProps } from "@mantine/core";

export type TextareaProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TextareaProps, "value" | "defaultValue">;

export function Textarea<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TextareaProps<T>) {
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
    <$Textarea
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
