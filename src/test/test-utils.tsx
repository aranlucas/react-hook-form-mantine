import { cleanup, render } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

import { type RenderResult } from "@testing-library/react";

function customRender(ui: React.ReactElement, options = {}): RenderResult {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => {
      const methods = useForm();
      return <FormProvider {...methods}>{children}</FormProvider>;
    },
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
