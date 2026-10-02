import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { TagsInput as $TagsInput, type TagsInputProps as $TagsInputProps } from "@mantine/core";

export type TagsInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TagsInputProps, "value" | "defaultValue">;

export function TagsInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TagsInputProps<T>) {
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
    <$TagsInput
      error={fieldState.error?.message}
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...inputProps}
    />
  );
}
