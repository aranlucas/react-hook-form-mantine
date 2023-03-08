import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  TransferList as $TransferList,
  type TransferListProps as $TransferListProps,
} from "@mantine/core";

export type TransferListProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TransferListProps, "value">;

export function TransferList<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TransferListProps<T>) {
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
    <$TransferList
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
}
