import { act, screen, renderWithForm, waitFor } from "@test/test-utils";
import { Autocomplete } from "@/Autocomplete/Autocomplete";

describe("Autocomplete", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<Autocomplete name="test" label="Country" data={[]} />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Country")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
