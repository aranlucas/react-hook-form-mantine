import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  MonthPickerInput as $MonthPickerInput,
  type DatesRangeValue as $DatesRangeValue,
  type MonthPickerInputProps as $MonthPickerInputProps,
  type DateValue as $DateValue,
} from "@mantine/dates";

export type MonthPickerInputProps<T extends FieldValues> =
  UseControllerProps<T> &
    Omit<$MonthPickerInputProps, "value" | "defaultValue" | "onChange"> & {
      onChange?: (value: $DatesRangeValue | $DateValue | Date[]) => void;
    };

export function MonthPickerInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MonthPickerInputProps<T>) {
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
    <$MonthPickerInput
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
