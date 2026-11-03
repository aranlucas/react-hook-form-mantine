import { screen, renderWithForm, waitFor } from "@test/test-utils";
import { Autocomplete } from "@/Autocomplete/Autocomplete";

describe("Autocomplete", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<Autocomplete name="test" label="Country" data={[]} />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Country")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
