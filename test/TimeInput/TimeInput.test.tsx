import { act, screen, renderWithForm, waitFor, fireEvent } from "@test/test-utils";
import { TimeInput } from "@/TimeInput/TimeInput";

describe("TimeInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<TimeInput name="test" label="Time" />, {
      defaultValues: { test: "" },
    });

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", () => {
    const { form } = renderWithForm(<TimeInput name="test" label="Label" />, {
      defaultValues: { test: "" },
    });

    const input = screen.getByLabelText("Label");
    fireEvent.change(input, { target: { value: "12:34" } });
    expect(form.getValues("test")).toBe("12:34");
  });
});
