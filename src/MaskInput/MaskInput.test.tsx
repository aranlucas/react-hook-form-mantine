import { render, screen, renderWithForm, act, waitFor, fireEvent } from "../test/test-utils";
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
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const { form, container } = renderWithForm(
      <MaskInput name="test" label="Phone" mask="***-***-****" />,
      { defaultValues: { test: "" } },
    );
    const input = container.querySelector("input")!;
    fireEvent.change(input, { target: { value: "HelloWorld" } });
    expect(form.getValues("test")).toBe("HelloWorld");
  });
});
