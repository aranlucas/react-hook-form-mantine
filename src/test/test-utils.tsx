import { cleanup, render as rtlRender } from "@testing-library/react";
import { FormProvider, useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import { MantineProvider } from "@mantine/core";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

import { type RenderResult } from "@testing-library/react";

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <FormProvider {...useForm()}>{children}</FormProvider>
    </MantineProvider>
  );
}

function customRender(ui: React.ReactElement, options = {}): RenderResult {
  return rtlRender(ui, {
    wrapper: AllProviders,
    ...options,
  });
}

export function renderWithForm(
  ui: React.ReactElement,
  formOptions?: Parameters<typeof useForm>[0],
): RenderResult & { form: UseFormReturn<FieldValues> } {
  let form: UseFormReturn<FieldValues>;

  function Wrapper({ children }: { children: React.ReactNode }) {
    form = useForm(formOptions) as unknown as UseFormReturn<FieldValues>;
    return (
      <MantineProvider>
        <FormProvider {...form}>{children}</FormProvider>
      </MantineProvider>
    );
  }

  const result = rtlRender(ui, { wrapper: Wrapper });
  return { ...result, form: form! };
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
