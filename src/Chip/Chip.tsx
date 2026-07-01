import { type UseControllerProps, useController, type FieldValues } from "react-hook-form";
import { type ChipProps as $ChipProps, Chip as $Chip } from "@mantine/core";
import { ChipGroup } from "./ChipGroup/ChipGroup";

export type ChipProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ChipProps, "value" | "defaultValue">;

export const Chip = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ChipProps<T>) => {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Chip
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
};

Chip.Group = ChipGroup;
Chip.Item = $Chip;
