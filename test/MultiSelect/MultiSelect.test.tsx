import { screen, renderWithForm, waitFor } from "@test/test-utils";
import { MultiSelect } from "@/MultiSelect/MultiSelect";

describe("MultiSelect", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<MultiSelect name="test" label="Roles" data={["A", "B"]} />, {
      defaultValues: { test: [] },
    });

    expect(screen.getByText("Roles")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
