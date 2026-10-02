import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  InlineDateTimePicker as $InlineDateTimePicker,
  type InlineDateTimePickerProps as $InlineDateTimePickerProps,
} from "@mantine/dates";

export type InlineDateTimePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$InlineDateTimePickerProps, "value" | "defaultValue">;

export function InlineDateTimePicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: InlineDateTimePickerProps<T>) {
  const {
    props: inputProps,
    field: { value, onChange: fieldOnChange, ...field },
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
    <$InlineDateTimePicker
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
