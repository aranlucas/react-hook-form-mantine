import { type UseControllerProps, useController } from "react-hook-form";
import {
  SegmentedControl as $SegmentedControl,
  type SegmentedControlProps as $SegmentedControlProps,
} from "@mantine/core";

export type SegmentedControlProps = UseControllerProps & $SegmentedControlProps;

export function SegmentedControl({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SegmentedControlProps) {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$SegmentedControl {...field} {...props} />;
}
