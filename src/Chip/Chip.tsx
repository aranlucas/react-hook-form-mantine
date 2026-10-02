import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type ChipProps as $ChipProps, Chip as $Chip } from "@mantine/core";
import { ChipGroup } from "./ChipGroup/ChipGroup";

export type ChipProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ChipProps, "value" | "defaultValue">;

/** Standalone chip input with react-hook-form controller. For use inside `ChipGroup`, use `Chip.Item` to avoid double controller registration. */
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
    props: inputProps,
    field: { value, onChange: fieldOnChange, ...field },
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
    <$Chip
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...inputProps}
    />
  );
};

Chip.Group = ChipGroup;
Chip.Item = $Chip;
