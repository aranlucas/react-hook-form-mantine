import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Radio as $Radio, type RadioProps as $RadioProps } from "@mantine/core";
import { RadioGroup } from "./RadioGroup/RadioGroup";

export type RadioProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RadioProps, "value" | "defaultValue">;

/** Standalone radio input with react-hook-form controller. For use inside `RadioGroup`, use `Radio.Item` to avoid double controller registration. */
export function Radio<T extends FieldValues>(props: RadioProps<T>) {
  const { field, props: inputProps } = useFieldController<T, typeof props>(props);

  return <$Radio {...field} {...inputProps} />;
}

Radio.Group = RadioGroup;

Radio.Item = $Radio;
