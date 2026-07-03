import { render, screen, renderWithForm, act, waitFor, userEvent } from "../test/test-utils";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  it("renders with a name", () => {
    render(<TextInput name="test" label="Name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<TextInput name="test" label="Name" />, {
      defaultValues: { test: "" },
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
    const { form } = renderWithForm(<TextInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "Hello");
    expect(form.getValues("test")).toBe("Hello");
  });
});
