import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import {
  SegmentedControl as $SegmentedControl,
  type SegmentedControlProps as $SegmentedControlProps,
} from "@mantine/core";

export type SegmentedControlProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SegmentedControlProps, "values" | "defaultValues">;

export function SegmentedControl<T extends FieldValues>(props: SegmentedControlProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$SegmentedControl {...field} {...inputProps} />;
}
