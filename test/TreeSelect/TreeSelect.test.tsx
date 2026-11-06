import { act, screen, renderWithForm, waitFor } from "@test/test-utils";
import { TreeSelect } from "@/TreeSelect/TreeSelect";

describe("TreeSelect", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<TreeSelect name="test" label="Category" data={[]} />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Category")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
