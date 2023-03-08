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
  $TransferListProps;

export function TransferList<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: TransferListProps<T>) {
  const { field } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$TransferList {...field} {...props} />;
}
