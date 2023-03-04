import { type UseControllerProps, useController } from "react-hook-form";
import {
  TransferList as $TransferList,
  type TransferListProps as $TransferListProps,
} from "@mantine/core";

export type TransferListProps = UseControllerProps & $TransferListProps;

export function TransferList({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: TransferListProps) {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$TransferList {...field} {...props} />;
}
