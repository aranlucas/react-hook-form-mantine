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
  Omit<$ChipProps, "value" | "defaultValue">;
export type ChipGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ChipGroupProps, "value" | "defaultValue">;

export function Chip<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ChipProps<T>) {
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
}

Chip.Group = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ChipGroupProps<T>) => {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Chip.Group
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
};

Chip.Item = $Chip;
