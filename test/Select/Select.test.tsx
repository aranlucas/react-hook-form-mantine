import { screen, renderWithForm, waitFor } from "@test/test-utils";
import { Select } from "@/Select/Select";

describe("Select", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<Select name="test" label="Role" data={["A", "B"]} />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Role")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
