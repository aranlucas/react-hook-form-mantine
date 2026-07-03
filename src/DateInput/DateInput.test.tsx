import { render, screen, renderWithForm, waitFor, userEvent } from "../test/test-utils";
import { DateInput } from "./DateInput";

describe("DateInput", () => {
  it("renders with a name", () => {
    render(<DateInput name="test" label="Date" />);
    expect(screen.getByText("Date")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<DateInput name="test" label="Date" />, {
      defaultValues: { test: null },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<DateInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "2024-01-15");
    expect(form.getValues("test")).toBeTruthy();
  });
});
