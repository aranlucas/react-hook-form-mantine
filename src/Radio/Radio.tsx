import { type UseControllerProps, useController } from "react-hook-form";
import {
  Radio as $Radio,
  type RadioGroupProps as $RadioGroupProps,
  type RadioProps as $RadioProps,
} from "@mantine/core";

export type RadioProps = UseControllerProps & $RadioProps;
export type RadioGroupProps = UseControllerProps & $RadioGroupProps;

export function Radio({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RadioProps) {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Radio {...field} {...props} />;
}

Radio.Group = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RadioGroupProps) => {
  const { field, fieldState } = useController({
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
