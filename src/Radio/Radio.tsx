import { useFieldController } from "../internal/useFieldController";
import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Radio as $Radio, type RadioProps as $RadioProps } from "@mantine/core";
import { RadioGroup } from "./RadioGroup/RadioGroup";

export type RadioProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RadioProps, "value" | "defaultValue">;

/** Standalone radio input with react-hook-form controller. For use inside `RadioGroup`, use `Radio.Item` to avoid double controller registration. */
export function Radio<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: RadioProps<T>) {
  const {
    props: inputProps,
    field: { value, onChange: fieldOnChange, ...field },
  } = useFieldController<T, typeof props>(
    {
      name,
      control,
      defaultValue,
      rules,
      shouldUnregister,
    },
    props,
  );

  return (
    <$Radio
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...inputProps}
    />
  );
}

Radio.Group = RadioGroup;
Radio.Item = $Radio;
