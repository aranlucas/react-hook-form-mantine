import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  InlineDateTimePicker as $InlineDateTimePicker,
  type InlineDateTimePickerProps as $InlineDateTimePickerProps,
} from "@mantine/dates";

export type InlineDateTimePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$InlineDateTimePickerProps, "value" | "defaultValue">;

export function InlineDateTimePicker<T extends FieldValues>(props: InlineDateTimePickerProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$InlineDateTimePicker {...field} {...inputProps} />;
}
