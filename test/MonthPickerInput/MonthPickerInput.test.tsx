import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { MonthPickerInput } from "@/MonthPickerInput/MonthPickerInput";

describe("MonthPickerInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<MonthPickerInput name="test" label="Month" />, {
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
      <MonthPickerInput name="test" label="Label" defaultDate="2024-01-01" />,
      {
        defaultValues: { test: null },
      },
    );

    await user.click(screen.getByLabelText("Label"));
    await waitFor(() => expect(screen.getByText("Jul")).toBeInTheDocument());
    await user.click(screen.getByText("Jul"));
    expect(form.getValues("test")).toBe("2024-07-01");
  });
});
