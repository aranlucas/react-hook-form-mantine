import { render, screen, renderWithForm, waitFor, userEvent } from "../test/test-utils";
import { ColorInput } from "./ColorInput";

describe("ColorInput", () => {
  it("renders with a name", () => {
    render(<ColorInput name="test" label="Color" />);
    expect(screen.getByText("Color")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<ColorInput name="test" label="Color" />, {
      defaultValues: { test: "" },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<ColorInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "Hello");
    expect(form.getValues("test")).toBe("Hello");
  });
});
