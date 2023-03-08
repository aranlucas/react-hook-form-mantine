import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  Autocomplete as $Autocomplete,
  type AutocompleteProps as $AutocompleteProps,
} from "@mantine/core";

export type AutocompleteProps<T extends FieldValues> = UseControllerProps<T> &
  $AutocompleteProps;

export function Autocomplete<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: AutocompleteProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Autocomplete error={fieldState.error?.message} {...field} {...props} />
  );
}
