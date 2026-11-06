import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { Switch } from "@/Switch/Switch";

describe("Switch", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<Switch name="test" label="Enable" />, {
      defaultValues: { test: false },
    });

    expect(screen.getByText("Enable")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
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
