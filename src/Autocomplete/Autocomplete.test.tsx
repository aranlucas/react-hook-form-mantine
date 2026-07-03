import { render, screen, renderWithForm, act, waitFor } from "../test/test-utils";
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
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
