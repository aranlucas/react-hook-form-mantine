import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  YearPickerInput as $YearPickerInput,
  type DatesRangeValue as $DatesRangeValue,
  type YearPickerInputProps as $YearPickerInputProps,
  type DateValue as $DateValue,
} from "@mantine/dates";

export type YearPickerInputProps<T extends FieldValues> =
  UseControllerProps<T> &
    Omit<$YearPickerInputProps, "value" | "defaultValue" | "onChange"> & {
      onChange?: (value: $DatesRangeValue | $DateValue | Date[]) => void;
    };

export function YearPickerInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: YearPickerInputProps<T>) {
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
    <$YearPickerInput
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
