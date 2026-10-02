import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import {
  SegmentedControl as $SegmentedControl,
  type SegmentedControlProps as $SegmentedControlProps,
} from "@mantine/core";

export type SegmentedControlProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SegmentedControlProps, "values" | "defaultValues">;

export function SegmentedControl<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SegmentedControlProps<T>) {
  const {
    props: inputProps,
    field: { value, onChange: fieldOnChange, ...field },
  } = useFieldController<T, typeof props>(
    {
      name,
      control,
      defaultValue,
      rules,
      shouldUnregister,
    },
    props,
  );

  return (
    <$SegmentedControl
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...inputProps}
    />
  );
}
