import { screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { ColorInput } from "@/ColorInput/ColorInput";

describe("ColorInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<ColorInput name="test" label="Color" />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Color")).toBeInTheDocument();

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
