import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type ChipProps as $ChipProps, Chip as $Chip } from "@mantine/core";
import { ChipGroup } from "./ChipGroup/ChipGroup";

export type ChipProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ChipProps, "value" | "defaultValue">;

/** Standalone chip input with react-hook-form controller. For use inside `ChipGroup`, use `Chip.Item` to avoid double controller registration. */
export const Chip = <T extends FieldValues>(props: ChipProps<T>) => {
  const {
    field: { value, ...field },
    props: inputProps,
  } = useFieldController<T, typeof props>(props);

  return <$Chip checked={value} {...field} {...inputProps} />;
};

Chip.Group = ChipGroup;

Chip.Item = $Chip;
