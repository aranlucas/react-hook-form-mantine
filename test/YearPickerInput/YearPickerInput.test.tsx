import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { YearPickerInput } from "@/YearPickerInput/YearPickerInput";

describe("YearPickerInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<YearPickerInput name="test" label="Year" />, {
      defaultValues: { test: null },
    });

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();

    const { form } = renderWithForm(
      <YearPickerInput name="test" label="Label" defaultDate="2024-01-01" />,
      {
        defaultValues: { test: null },
      },
    );

    await user.click(screen.getByLabelText("Label"));
    await waitFor(() => expect(screen.getByText("2026")).toBeInTheDocument());
    await user.click(screen.getByText("2026"));
    expect(form.getValues("test")).toBe("2026-01-01");
  });
});
