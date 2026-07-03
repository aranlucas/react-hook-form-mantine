import { render, screen, renderWithForm, waitFor } from "../test/test-utils";
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
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
