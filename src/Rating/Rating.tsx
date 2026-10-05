import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Rating as $Rating, type RatingProps as $RatingProps } from "@mantine/core";

export type RatingProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RatingProps, "value" | "defaultValue">;

export function Rating<T extends FieldValues>(props: RatingProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$Rating {...field} {...inputProps} />;
}
