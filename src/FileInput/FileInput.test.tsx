import { render, screen, renderWithForm, act, waitFor } from "../test/test-utils";
import { FileInput } from "./FileInput";

describe("FileInput", () => {
  it("renders with a name", () => {
    render(<FileInput name="test" label="File" />);
    expect(screen.getByText("File")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<FileInput name="test" label="File" />, {
      defaultValues: { test: null },
    });
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
