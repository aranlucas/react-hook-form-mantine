import { type UseControllerProps, useController } from "react-hook-form";
import {
  Switch as $Switch,
  type SwitchGroupProps as $SwitchGroupProps,
  type SwitchProps as $SwitchProps,
} from "@mantine/core";

export type SwitchProps = UseControllerProps & $SwitchProps;
export type SwitchGroupProps = UseControllerProps & $SwitchGroupProps;

export function Switch({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SwitchProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Switch error={fieldState.error?.message} {...field} {...props} />;
}

Switch.Group = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SwitchGroupProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return (
    <$Switch.Group error={fieldState.error?.message} {...field} {...props} />
  );
};

Switch.Item = $Switch;
