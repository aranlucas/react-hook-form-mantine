import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  DatePickerInput as $DatePickerInput,
  type DatePickerType,
  type DatePickerInputProps as $DatePickerInputProps,
} from "@mantine/dates";

export type DatePickerInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DatePickerInputProps<DatePickerType>, "value" | "defaultValue">;

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
    <$DatePickerInput
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
