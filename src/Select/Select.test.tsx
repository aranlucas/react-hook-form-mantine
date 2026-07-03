import { render, screen, renderWithForm, act, waitFor } from "../test/test-utils";
import { Select } from "./Select";

describe("Select", () => {
  it("renders with a name", () => {
    render(<Select name="test" label="Role" data={["A", "B"]} />);
    expect(screen.getByText("Role")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<Select name="test" label="Role" data={["A", "B"]} />, {
      defaultValues: { test: "" },
    });
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
