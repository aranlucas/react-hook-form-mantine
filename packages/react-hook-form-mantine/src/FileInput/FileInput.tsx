import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  FileInput as $FileInput,
  type FileInputProps as $FileInputProps,
} from "@mantine/core";

export type FileInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$FileInputProps, "value" | "defaultValue">;

export function FileInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  multiple,
  ...props
}: FileInputProps<T>) {
  const {
    field: { value, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$FileInput
      value={value}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
