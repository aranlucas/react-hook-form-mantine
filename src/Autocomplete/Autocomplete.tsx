import { useFieldController } from "../internal/useFieldController";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import {
  Autocomplete as $Autocomplete,
  type AutocompleteProps as $AutocompleteProps,
} from "@mantine/core";

export type AutocompleteProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$AutocompleteProps, "value" | "defaultValue">;

export function Autocomplete<T extends FieldValues>(props: AutocompleteProps<T>) {
  const { field, fieldState, props: inputProps } = useFieldController(props);

  return <$Autocomplete {...field} error={fieldState.error?.message} {...inputProps} />;
}
