import { useController, type UseControllerProps } from "react-hook-form";
import {
  Checkbox as $Checkbox,
  type CheckboxProps as $CheckboxProps,
  type CheckboxGroupProps as $CheckboxGroupProps,
} from "@mantine/core";

export type CheckboxProps = UseControllerProps & $CheckboxProps;
export type CheckboxGroupProps = UseControllerProps & $CheckboxGroupProps;

export const Checkbox = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...mantineProps
}: CheckboxProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Checkbox error={fieldState.error?.message} {...field} {...mantineProps} />
  );
};

Checkbox.Group = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: CheckboxGroupProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Checkbox.Group error={fieldState.error?.message} {...field} {...props} />
  );
};

Checkbox.Item = $Checkbox;
