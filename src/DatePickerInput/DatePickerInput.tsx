import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  DatePickerInput as $DatePickerInput,
  type DatesRangeValue as $DatesRangeValue,
  type DatePickerInputProps as $DatePickerInputProps,
  type DateValue as $DateValue,
} from "@mantine/dates";

export type DatePickerInputProps<T extends FieldValues> =
  UseControllerProps<T> &
    Omit<$DatePickerInputProps, "value" | "defaultValue" | "onChange"> & {
      onChange?: (value: $DatesRangeValue | $DateValue | Date[]) => void;
    };

export function DatePickerInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DatePickerInputProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$DatePickerInput
      error={fieldState.error?.message}
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
}
