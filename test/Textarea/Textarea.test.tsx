import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { Textarea } from "@/Textarea/Textarea";

describe("Textarea", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<Textarea name="test" label="Bio" />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Bio")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
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
