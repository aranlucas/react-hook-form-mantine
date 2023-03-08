import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Radio as $Radio,
  type RadioGroupProps as $RadioGroupProps,
  type RadioProps as $RadioProps,
} from "@mantine/core";

export type RadioProps<T extends FieldValues> = UseControllerProps<T> &
  $RadioProps;
export type RadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  $RadioGroupProps;

export function Radio<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RadioProps<T>) {
  const { field } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Radio {...field} {...props} />;
}

Radio.Group = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RadioGroupProps<T>) => {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return (
    <$Radio.Group error={fieldState.error?.message} {...field} {...props} />
  );
};

Radio.Item = $Radio;
