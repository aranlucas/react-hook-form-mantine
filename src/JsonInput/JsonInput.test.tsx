import { render, screen, renderWithForm, act, waitFor, userEvent } from "../test/test-utils";
import { JsonInput } from "./JsonInput";

describe("JsonInput", () => {
  it("renders with a name", () => {
    render(<JsonInput name="test" label="JSON" />);
    expect(screen.getByText("JSON")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<JsonInput name="test" label="JSON" />, {
      defaultValues: { test: "" },
    });
    await act(() => {
      form.setError("test", { message: "Invalid" });
    });
    await waitFor(() => {
      expect(screen.getByText("Invalid")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(<JsonInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });
    const input = screen.getByRole("textbox");
    await user.type(input, "Hello");
    expect(form.getValues("test")).toBe("Hello");
  });
});
