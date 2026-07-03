import { render, screen, renderWithForm, waitFor } from "../test/test-utils";
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
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
