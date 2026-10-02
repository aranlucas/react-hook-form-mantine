import {
  type FieldValues,
  type UseControllerProps,
  type UseControllerReturn,
  useController,
} from "react-hook-form";

type InputLifecycleProps = {
  disabled?: boolean;
  onBlur?: (...args: any[]) => void;
};

/** Binds controller lifecycle without letting custom blur replace form bookkeeping. */
export function useFieldController<T extends FieldValues, P extends InputLifecycleProps>(
  options: UseControllerProps<T>,
  props: P,
): UseControllerReturn<T> & { props: Omit<P, "onBlur"> } {
  const { onBlur, ...rest } = props;
  const controller = useController<T>({ ...options, disabled: props.disabled });

  // Preserve an explicit UI setting, but do not mask form-level disabled state.
  if (rest.disabled === undefined) {
    delete rest.disabled;
  }

  return {
    ...controller,
    field: {
      ...controller.field,
      onBlur: (...args: Parameters<NonNullable<P["onBlur"]>>) => {
        controller.field.onBlur();
        onBlur?.(...args);
      },
    },
    props: rest,
  };
}
