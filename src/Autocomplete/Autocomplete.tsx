import { useController, type UseControllerProps } from "react-hook-form";
import {
  Autocomplete as $Autocomplete,
  type AutocompleteProps as $AutocompleteProps,
} from "@mantine/core";

export type AutocompleteProps = UseControllerProps & $AutocompleteProps;

export function Autocomplete({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: AutocompleteProps) {
  const { field, fieldState } = useController({
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
