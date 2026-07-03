import { render, screen, renderWithForm, act, waitFor } from "../test/test-utils";
import { TreeSelect } from "./TreeSelect";

describe("TreeSelect", () => {
  it("renders with a name", () => {
    render(<TreeSelect name="test" label="Category" data={[]} />);
    expect(screen.getByText("Category")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<TreeSelect name="test" label="Category" data={[]} />, {
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
