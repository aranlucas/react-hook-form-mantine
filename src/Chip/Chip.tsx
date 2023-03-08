import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Chip as $Chip,
  type ChipProps as $ChipProps,
  type ChipGroupProps as $ChipGroupProps,
} from "@mantine/core";

export type ChipProps<T extends FieldValues> = UseControllerProps<T> &
  $ChipProps;
export type ChipGroupProps<T extends FieldValues> = UseControllerProps<T> &
  $ChipGroupProps;

export function Chip<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ChipProps<T>) {
  const {
    field: { value, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Chip value={value} checked={value} {...field} {...props} />;
}

Chip.Group = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ChipGroupProps<T>) => {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return <$Chip.Group {...field} {...props} />;
};

Chip.Item = $Chip;
