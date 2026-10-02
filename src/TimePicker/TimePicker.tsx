import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  TimePicker as $TimePicker,
  type TimePickerProps as $TimePickerProps,
} from "@mantine/dates";

export type TimePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TimePickerProps, "value" | "defaultValue">;

export function TimePicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TimePickerProps<T>) {
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
    <$TimePicker
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
