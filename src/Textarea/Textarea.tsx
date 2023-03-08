import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Textarea as $Textarea,
  type TextareaProps as $TextareaProps,
} from "@mantine/core";

export type TextareaProps<T extends FieldValues> = UseControllerProps<T> &
  $TextareaProps;

export function Textarea<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: TextareaProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Textarea error={fieldState.error?.message} {...field} {...props} />;
}
