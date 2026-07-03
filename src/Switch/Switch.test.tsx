import { render, screen, renderWithForm, waitFor, userEvent } from "../test/test-utils";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders with a name", () => {
    render(<Switch name="test" label="Enable" />);
    expect(screen.getByText("Enable")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<Switch name="test" label="Enable" />, {
      defaultValues: { test: false },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("toggles value on click", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<Switch name="test" label="Label" />, {
      defaultValues: { test: false },
    });
    await user.click(screen.getByRole("switch"));
    expect(form.getValues("test")).toBe(true);
  });
});
