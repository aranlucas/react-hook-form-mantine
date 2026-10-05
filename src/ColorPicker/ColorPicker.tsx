import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import {
  ColorPicker as $ColorPicker,
  type ColorPickerProps as $ColorPickerProps,
} from "@mantine/core";

export type ColorPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ColorPickerProps, "value" | "defaultValue">;

export function ColorPicker<T extends FieldValues>(props: ColorPickerProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$ColorPicker {...field} {...inputProps} />;
}
