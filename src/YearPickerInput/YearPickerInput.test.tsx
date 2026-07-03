import { render, screen, renderWithForm, waitFor, userEvent } from "../test/test-utils";
import { YearPickerInput } from "./YearPickerInput";

describe("YearPickerInput", () => {
  it("renders with a name", () => {
    render(<YearPickerInput name="test" label="Year" />);
    expect(screen.getByText("Year")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<YearPickerInput name="test" label="Year" />, {
      defaultValues: { test: null },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<YearPickerInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    await user.click(screen.getByLabelText("Label"));
    await waitFor(() => expect(screen.getByText("2026")).toBeInTheDocument());
    await user.click(screen.getByText("2026"));
    expect(form.getValues("test")).toBeTruthy();
  });
});
