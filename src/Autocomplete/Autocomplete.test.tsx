import { render, screen, renderWithForm, waitFor } from "../test/test-utils";
import { Autocomplete } from "./Autocomplete";

describe("Autocomplete", () => {
  it("renders with a name", () => {
    render(<Autocomplete name="test" label="Country" data={[]} />);
    expect(screen.getByText("Country")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<Autocomplete name="test" label="Country" data={[]} />, {
      defaultValues: { test: "" },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
