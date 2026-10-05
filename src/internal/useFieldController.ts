import { type Ref, useMemo } from "react";
import mergeRefs from "merge-refs";
import {
  type FieldValues,
  type RefCallBack,
  type UseControllerProps,
  type UseControllerReturn,
  useController,
} from "react-hook-form";

// `never[]` accepts any handler signature without `any`: parameters are contravariant, so every
// function is assignable to one that takes `never`. The precise signature comes back through P.
type FieldHandlers = {
  disabled?: boolean;
  onBlur?: (...args: never[]) => void;
  onChange?: (...args: never[]) => void;
  ref?: Ref<unknown>;
};

type ControllerKeys = "name" | "control" | "defaultValue" | "rules" | "shouldUnregister" | "exact";

/**
 * Binds a wrapper's props to react-hook-form. Controller options are consumed here, and the
 * user's `onChange`, `onBlur` and `ref` are composed into `field` so they cannot replace form
 * bookkeeping when the remaining props are spread after it.
 */
export function useFieldController<T extends FieldValues, P extends FieldHandlers>(
  props: P & UseControllerProps<T>,
): UseControllerReturn<T> & {
  props: Omit<P, ControllerKeys | "onBlur" | "onChange" | "ref">;
} {
  const {
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    exact,
    onBlur,
    onChange,
    ref,
    ...rest
  } = props;

  const controller = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    exact,
    disabled: props.disabled,
  });

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
      // The form stores the first argument (a value or change event); the user gets all of them.
      onChange: (...args: Parameters<NonNullable<P["onChange"]>>) => {
        controller.field.onChange(args[0]);
        onChange?.(...args);
      },
      onBlur: (...args: Parameters<NonNullable<P["onBlur"]>>) => {
        controller.field.onBlur();
        onBlur?.(...args);
      },
    },
    props: rest,
  };
}
