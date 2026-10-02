import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  DatePicker as $DatePicker,
  type DatePickerProps as $DatePickerProps,
  type DatePickerType,
} from "@mantine/dates";

export type DatePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DatePickerProps<DatePickerType>, "value" | "defaultValue">;

export function DatePicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DatePickerProps<T>) {
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
    <$DatePicker
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
