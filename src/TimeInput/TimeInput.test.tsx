import { render, screen, renderWithForm, waitFor, userEvent } from "../test/test-utils";
import { TimeInput } from "./TimeInput";

describe("TimeInput", () => {
  it("renders with a name", () => {
    render(<TimeInput name="test" label="Time" />);
    expect(screen.getByText("Time")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<TimeInput name="test" label="Time" />, {
      defaultValues: { test: "" },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<TimeInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    const input = screen.getByLabelText("Label");
    await user.type(input, "12:34");
    expect(form.getValues("test")).toBeTruthy();
  });
});
