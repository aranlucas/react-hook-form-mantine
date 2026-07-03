import { render, screen, renderWithForm, waitFor, userEvent } from "../test/test-utils";
import { PasswordInput } from "./PasswordInput";

describe("PasswordInput", () => {
  it("renders with a name", () => {
    render(<PasswordInput name="test" label="Password" />);
    expect(screen.getByText("Password")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<PasswordInput name="test" label="Password" />, {
      defaultValues: { test: "" },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<PasswordInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    const input = screen.getByLabelText("Label");
    await user.type(input, "Hello");
    expect(form.getValues("test")).toBe("Hello");
  });
});
