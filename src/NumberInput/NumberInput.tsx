import { forwardRef } from "react";
import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  NumberInput as $NumberInput,
  type NumberInputProps as $NumberInputProps,
} from "@mantine/core";
import { useMergeRefs } from "../useMergedRef";

export type NumberInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$NumberInputProps, "value" | "defaultValue">;

export const NumberInput = forwardRef(function NumberInput<
  T extends FieldValues,
>(
  {
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    onChange,
    ...props
  }: NumberInputProps<T>,
  ref: React.Ref<HTMLInputElement>,
) {
  const {
    field: { value, onChange: fieldOnChange, ref: hookRef, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  const mergedRef = useMergeRefs(hookRef, ref);

  return (
    <$NumberInput
      ref={mergedRef}
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
});
