import { render, screen, renderWithForm, act, waitFor, userEvent } from "../test/test-utils";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with a name", () => {
    render(<Checkbox name="test" label="Accept" />);
    expect(screen.getByText("Accept")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<Checkbox name="test" label="Accept" />, {
      defaultValues: { test: false },
    });
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("toggles value on click", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<Checkbox name="test" label="Label" />, {
      defaultValues: { test: false },
    });
    await user.click(screen.getByRole("checkbox"));
    expect(form.getValues("test")).toBe(true);
  });
});
