import { type UseControllerProps, useController } from "react-hook-form";
import {
  Textarea as $Textarea,
  type TextareaProps as $TextareaProps,
} from "@mantine/core";

export type TextareaProps = UseControllerProps & $TextareaProps;

export function Textarea({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: TextareaProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Textarea error={fieldState.error?.message} {...field} {...props} />;
}
