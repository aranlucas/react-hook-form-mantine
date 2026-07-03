import { render, screen, renderWithForm, waitFor, userEvent } from "../test/test-utils";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders with a name", () => {
    render(<Textarea name="test" label="Bio" />);
    expect(screen.getByText("Bio")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<Textarea name="test" label="Bio" />, {
      defaultValues: { test: "" },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<Textarea name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "Hello");
    expect(form.getValues("test")).toBe("Hello");
  });
});
