import { act, screen, renderWithForm, waitFor, fireEvent } from "@test/test-utils";
import { MaskInput } from "@/MaskInput/MaskInput";

describe("MaskInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<MaskInput name="test" label="Phone" mask="***-***-****" />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Phone")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", () => {
    const { form } = renderWithForm(<MaskInput name="test" label="Phone" mask="***-***-****" />, {
      defaultValues: { test: "" },
    });

    const input = screen.getByRole("textbox", { name: "Phone" });
    fireEvent.change(input, { target: { value: "HelloWorld" } });
    expect(form.getValues("test")).toBe("HelloWorld");
  });
});
