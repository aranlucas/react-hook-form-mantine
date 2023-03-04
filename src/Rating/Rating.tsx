import { type UseControllerProps, useController } from "react-hook-form";
import {
  Rating as $Rating,
  type RatingProps as $RatingProps,
} from "@mantine/core";

export type RatingProps = UseControllerProps & $RatingProps;

export function Rating({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RatingProps) {
  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Rating {...field} {...props} />;
}
