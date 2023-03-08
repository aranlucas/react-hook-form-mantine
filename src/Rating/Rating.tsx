import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Rating as $Rating,
  type RatingProps as $RatingProps,
} from "@mantine/core";

export type RatingProps<T extends FieldValues> = UseControllerProps<T> &
  $RatingProps;

export function Rating<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RatingProps<T>) {
  const { field } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });
  return <$Rating {...field} {...props} />;
}
