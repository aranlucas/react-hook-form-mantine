import { screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { DatePickerInput } from "@/DatePickerInput/DatePickerInput";

describe("DatePickerInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<DatePickerInput name="test" label="Date" />, {
      defaultValues: { test: null },
    });

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();

    const { form } = renderWithForm(<DatePickerInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });

    await user.click(screen.getByLabelText("Label"));
    await waitFor(() => expect(screen.getByText("15")).toBeInTheDocument());
    await user.click(screen.getByText("15"));
    expect(form.getValues("test")).toBeTruthy();
  });
});
