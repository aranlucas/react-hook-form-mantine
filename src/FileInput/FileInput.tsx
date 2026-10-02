import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { FileInput as $FileInput, type FileInputProps as $FileInputProps } from "@mantine/core";

export type FileInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$FileInputProps, "value" | "defaultValue">;

export function FileInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: FileInputProps<T>) {
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
    <$FileInput
      value={value}
      error={fieldState.error?.message}
      onChange={(e: any) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...inputProps}
    />
  );
}
