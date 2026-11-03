import { screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { Checkbox } from "@/Checkbox/Checkbox";

describe("Checkbox", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<Checkbox name="test" label="Accept" />, {
      defaultValues: { test: false },
    });

    expect(screen.getByText("Accept")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
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

  it("binds the form value to checked, not the value attribute", () => {
    renderWithForm(<Checkbox name="test" label="Label" />, { defaultValues: { test: true } });

    const input = screen.getByRole("checkbox");
    expect(input).toBeChecked();
    expect(input).not.toHaveAttribute("value", "true");
  });
});
