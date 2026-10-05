import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { TagsInput as $TagsInput, type TagsInputProps as $TagsInputProps } from "@mantine/core";

export type TagsInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TagsInputProps, "value" | "defaultValue">;

export function TagsInput<T extends FieldValues>(props: TagsInputProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$TagsInput {...field} error={fieldState.error?.message} {...inputProps} />;
}
