import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  ColorPicker as $ColorPicker,
  type ColorPickerProps as $ColorPickerProps,
} from "@mantine/core";

export type ColorPickerProps<T extends FieldValues> = UseControllerProps<T> &
  $ColorPickerProps;

export function ColorPicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ColorPickerProps<T>) {
  const { field } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$ColorPicker {...field} {...props} />;
}
