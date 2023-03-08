import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  SegmentedControl as $SegmentedControl,
  type SegmentedControlProps as $SegmentedControlProps,
} from "@mantine/core";

export type SegmentedControlProps<T extends FieldValues> =
  UseControllerProps<T> & $SegmentedControlProps;

export function SegmentedControl<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SegmentedControlProps<T>) {
  const { field } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$SegmentedControl {...field} {...props} />;
}
