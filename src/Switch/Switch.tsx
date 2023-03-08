import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Switch as $Switch,
  type SwitchGroupProps as $SwitchGroupProps,
  type SwitchProps as $SwitchProps,
} from "@mantine/core";

export type SwitchProps<T extends FieldValues> = UseControllerProps<T> &
  $SwitchProps;
export type SwitchGroupProps<T extends FieldValues> = UseControllerProps<T> &
  $SwitchGroupProps;

export function Switch<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SwitchProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Switch error={fieldState.error?.message} {...field} {...props} />;
}

Switch.Group = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SwitchGroupProps<T>) => {
  const { field, fieldState } = useController<T>({
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
