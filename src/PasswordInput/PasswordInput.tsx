import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import {
  PasswordInput as $PasswordInput,
  type PasswordInputProps as $PasswordInputProps,
} from "@mantine/core";

export type PasswordInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$PasswordInputProps, "value" | "defaultValue">;

export function PasswordInput<T extends FieldValues>(props: PasswordInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$PasswordInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
