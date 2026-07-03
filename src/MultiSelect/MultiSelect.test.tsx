import { render, screen, renderWithForm, act, waitFor } from "../test/test-utils";
import { MultiSelect } from "./MultiSelect";

describe("MultiSelect", () => {
  it("renders with a name", () => {
    render(<MultiSelect name="test" label="Roles" data={["A", "B"]} />);
    expect(screen.getByText("Roles")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<MultiSelect name="test" label="Roles" data={["A", "B"]} />, {
      defaultValues: { test: [] },
    });
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
