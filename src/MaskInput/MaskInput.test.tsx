import { render, screen, renderWithForm, waitFor, fireEvent } from "../test/test-utils";
import { MaskInput } from "./MaskInput";

describe("MaskInput", () => {
  it("renders with a name", () => {
    render(<MaskInput name="test" label="Phone" mask="***-***-****" />);
    expect(screen.getByText("Phone")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<MaskInput name="test" label="Phone" mask="***-***-****" />, {
      defaultValues: { test: "" },
    });

    await waitFor(() => {
      form.setError("test", { message: "Required" });
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
