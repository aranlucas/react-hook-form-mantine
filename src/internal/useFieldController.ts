import { type Ref, useMemo } from "react";
import mergeRefs from "merge-refs";
import {
  type FieldValues,
  type RefCallBack,
  type UseControllerProps,
  type UseControllerReturn,
  useController,
} from "react-hook-form";

type InputLifecycleProps = {
  disabled?: boolean;
  onBlur?: (...args: any[]) => void;
  ref?: Ref<any>;
};

/** Binds controller lifecycle without letting custom blur or refs replace form bookkeeping. */
export function useFieldController<T extends FieldValues, P extends InputLifecycleProps>(
  options: UseControllerProps<T>,
  props: P,
): UseControllerReturn<T> & { props: Omit<P, "onBlur" | "ref"> } {
  const { onBlur, ref, ...rest } = props;
  const controller = useController<T>({ ...options, disabled: props.disabled });
  const fieldRef = controller.field.ref;
  // A user ref would otherwise override field.ref and break setFocus / focus on error.
  // SAFETY: fieldRef is always defined, so mergeRefs returns fieldRef itself or a merged callback.
  const mergedRef = useMemo(() => mergeRefs(fieldRef, ref) as RefCallBack, [fieldRef, ref]);

  // Preserve an explicit UI setting, but do not mask form-level disabled state.
  if (rest.disabled === undefined) {
    delete rest.disabled;
  }

  return {
    ...controller,
    field: {
      ...controller.field,
      ref: mergedRef,
      onBlur: (...args: Parameters<NonNullable<P["onBlur"]>>) => {
        controller.field.onBlur();
        onBlur?.(...args);
      },
    },
    props: rest,
  };
}
