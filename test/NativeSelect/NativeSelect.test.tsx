import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { NativeSelect } from "@/NativeSelect/NativeSelect";

describe("NativeSelect", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<NativeSelect name="test" label="Option" data={["A", "B"]} />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Option")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("selects value on change", async () => {
    const user = userEvent.setup();

    const { form } = renderWithForm(<NativeSelect name="test" label="Option" data={["A", "B"]} />, {
      defaultValues: { test: "" },
    });

    await user.selectOptions(screen.getByRole("combobox"), "A");
    expect(form.getValues("test")).toBe("A");
  });
});
