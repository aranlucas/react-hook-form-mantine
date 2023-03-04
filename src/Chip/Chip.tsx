import { type UseControllerProps, useController } from "react-hook-form";
import {
  Chip as $Chip,
  type ChipProps as $ChipProps,
  type ChipGroupProps as $ChipGroupProps,
} from "@mantine/core";

export type ChipProps = UseControllerProps & $ChipProps;
export type ChipGroupProps = UseControllerProps & $ChipGroupProps;

export function Chip({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ChipProps) {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Chip {...field} {...props} />;
}

Chip.Group = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ChipGroupProps) => {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return <$Chip.Group {...field} {...props} />;
};

Chip.Item = $Chip;
