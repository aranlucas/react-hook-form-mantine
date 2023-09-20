import { useMemo } from "react";

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>;

export function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (ref == null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    // @ts-expect-error current is a read only property
    ref.current = value;
  } catch (error) {
    // eslint-disable-next-line
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

export function useMergeRefs<T>(...refs: Array<ReactRef<T> | undefined>) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node: T) => {
      refs.forEach((ref) => {
        if (ref !== null) {
          assignRef(ref, node);
        }
      });
    };
  }, refs);
}
