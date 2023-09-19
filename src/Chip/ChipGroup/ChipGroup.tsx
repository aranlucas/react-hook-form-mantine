import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  type ChipGroupProps as $ChipGroupProps,
  ChipGroup as $ChipGroup,
} from "@mantine/core";

export type ChipGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$ChipGroupProps<boolean>, "value" | "defaultValue">;

export const ChipGroup = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ChipGroupProps<T>) => {
  const {
    field: { value, onChange: fieldOnChange, ref, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$ChipGroup
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
