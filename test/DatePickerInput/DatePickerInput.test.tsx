import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { DatePickerInput } from "@/DatePickerInput/DatePickerInput";

describe("DatePickerInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<DatePickerInput name="test" label="Date" />, {
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
      <DatePickerInput name="test" label="Label" defaultDate="2024-01-01" />,
      {
        defaultValues: { test: null },
      },
    );

    await user.click(screen.getByLabelText("Label"));
    await waitFor(() => expect(screen.getByText("15")).toBeInTheDocument());
    await user.click(screen.getByText("15"));
    expect(form.getValues("test")).toBe("2024-01-15");
  });
});
