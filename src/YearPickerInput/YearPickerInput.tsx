import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  YearPickerInput as $YearPickerInput,
  type DatePickerType,
  type YearPickerInputProps as $YearPickerInputProps,
} from "@mantine/dates";

export type YearPickerInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$YearPickerInputProps<DatePickerType>, "value" | "defaultValue">;

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
    <$YearPickerInput
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
