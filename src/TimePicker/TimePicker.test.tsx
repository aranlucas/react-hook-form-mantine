import { render, screen, renderWithForm, act, waitFor, userEvent } from "../test/test-utils";
import { TimePicker } from "./TimePicker";

describe("TimePicker", () => {
  it("renders with a name", () => {
    render(<TimePicker name="test" label="Time" />);
    expect(screen.getByText("Time")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<TimePicker name="test" label="Time" />, {
      defaultValues: { test: null },
    });
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<TimePicker name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    await user.click(screen.getByLabelText("Label"));
    await waitFor(() => {
      expect(screen.getAllByRole("spinbutton").length).toBe(2);
    });
    const hours = screen.getAllByRole("spinbutton")[0];
    const minutes = screen.getAllByRole("spinbutton")[1];
    await user.click(hours);
    await user.type(hours, "12");
    await user.click(minutes);
    await user.type(minutes, "00");
    await user.tab();
    expect(form.getValues("test")).toBeTruthy();
  });
});
