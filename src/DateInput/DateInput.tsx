import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { DateInput as $DateInput, type DateInputProps as $DateInputProps } from "@mantine/dates";

export type DateInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DateInputProps, "value" | "defaultValue">;

export function DateInput<T extends FieldValues>(props: DateInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$DateInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
