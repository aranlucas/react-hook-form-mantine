import { useEffect } from "react";
import { cleanup, render as rtlRender } from "@testing-library/react";
import {
  FormProvider,
  useForm,
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
} from "react-hook-form";
import { MantineProvider } from "@mantine/core";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

import { type RenderResult } from "@testing-library/react";

type ProviderProps = { children: React.ReactNode };
type FormRenderResult<T extends FieldValues> = RenderResult & { form: UseFormReturn<T> };

function AllProviders({ children }: ProviderProps) {
  return (
    <MantineProvider env="test">
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

export function renderWithForm<T extends FieldValues = FieldValues>(
  ui: React.ReactElement,
  formOptions?: UseFormProps<T>,
): FormRenderResult<T> {
  let form: UseFormReturn<T>;

  function Wrapper({ children }: ProviderProps) {
    const methods = useForm<T>(formOptions);

    useEffect(() => {
      form = methods;
    }, [methods]);

    return (
      <MantineProvider env="test">
        <FormProvider {...methods}>{children}</FormProvider>
      </MantineProvider>
    );
  }

  const result = rtlRender(ui, { wrapper: Wrapper });

  return { ...result, form: form! };
}

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
