import { screen, renderWithForm, waitFor } from "@test/test-utils";
import { TreeSelect } from "@/TreeSelect/TreeSelect";

describe("TreeSelect", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<TreeSelect name="test" label="Category" data={[]} />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Category")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
