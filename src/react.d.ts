import type React from "react";

// Redecalare forwardRef
declare module "react" {
  function forwardRef<T, P = unknown>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}
