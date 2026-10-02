import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  MonthPicker as $MonthPicker,
  type DatePickerType,
  type MonthPickerProps as $MonthPickerProps,
} from "@mantine/dates";

export type MonthPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MonthPickerProps<DatePickerType>, "value" | "defaultValue">;

export function MonthPicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MonthPickerProps<T>) {
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
    <$MonthPicker
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
