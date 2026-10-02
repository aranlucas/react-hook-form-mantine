import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  YearPicker as $YearPicker,
  type DatePickerType,
  type YearPickerProps as $YearPickerProps,
} from "@mantine/dates";

export type YearPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$YearPickerProps<DatePickerType>, "value" | "defaultValue">;

export function YearPicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: YearPickerProps<T>) {
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
    <$YearPicker
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
