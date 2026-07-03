import { render, screen, renderWithForm, waitFor, userEvent } from "../test/test-utils";
import { DateTimePicker } from "./DateTimePicker";

describe("DateTimePicker", () => {
  it("renders with a name", () => {
    render(<DateTimePicker name="test" label="DateTime" />);
    expect(screen.getByText("DateTime")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<DateTimePicker name="test" label="DateTime" />, {
      defaultValues: { test: null },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<DateTimePicker name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    await user.click(screen.getByLabelText("Label"));
    await waitFor(() => expect(screen.getByText("15")).toBeInTheDocument());
    await user.click(screen.getByText("15"));
    expect(form.getValues("test")).toBeTruthy();
  });
});
