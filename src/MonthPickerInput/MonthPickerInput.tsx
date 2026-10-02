import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  MonthPickerInput as $MonthPickerInput,
  type MonthPickerInputProps as $MonthPickerInputProps,
  type DatePickerType,
} from "@mantine/dates";

export type MonthPickerInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MonthPickerInputProps<DatePickerType>, "value" | "defaultValue">;

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
    props: inputProps,
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
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
    <$MonthPickerInput
      error={fieldState.error?.message}
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
