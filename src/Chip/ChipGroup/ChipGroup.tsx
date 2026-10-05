import { useFieldController } from "../../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type ChipGroupProps as $ChipGroupProps, ChipGroup as $ChipGroup } from "@mantine/core";

export type ChipGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ChipGroupProps<boolean>, "value" | "defaultValue">;

/** Chip group that manages selection state via react-hook-form. Children should use `Chip.Item` (raw Mantine Chip), not the wrapped `Chip` component. */
export const ChipGroup = <T extends FieldValues>(props: ChipGroupProps<T>) => {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$ChipGroup {...field} {...inputProps} />;
};
