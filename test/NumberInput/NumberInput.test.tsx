import { screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { NumberInput } from "@/NumberInput/NumberInput";

describe("NumberInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<NumberInput name="test" label="Age" />, {
      defaultValues: { test: 0 },
    });

    expect(screen.getByText("Age")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
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
