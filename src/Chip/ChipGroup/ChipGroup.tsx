import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  type ChipGroupProps as $ChipGroupProps,
  ChipGroup as $ChipGroup,
} from "@mantine/core";

export type ChipGroupProps<
  T extends FieldValues,
  V extends boolean,
> = UseControllerProps<T> & Omit<$ChipGroupProps<V>, "value" | "defaultValue">;

export const ChipGroup = <T extends FieldValues, V extends boolean>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ChipGroupProps<T, V>) => {
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
    <$ChipGroup<V>
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
