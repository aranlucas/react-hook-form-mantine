import { render, screen, renderWithForm, act, waitFor, userEvent } from "../test/test-utils";
import { NumberInput } from "./NumberInput";

describe("NumberInput", () => {
  it("renders with a name", () => {
    render(<NumberInput name="test" label="Age" />);
    expect(screen.getByText("Age")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<NumberInput name="test" label="Age" />, {
      defaultValues: { test: 0 },
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
    const { form } = renderWithForm(<NumberInput name="test" label="Age" />, {
      defaultValues: { test: 0 },
    });
    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "42");
    expect(form.getValues("test")).toBe(42);
  });
});
