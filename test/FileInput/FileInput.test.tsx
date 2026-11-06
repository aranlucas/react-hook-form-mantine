import { act, screen, renderWithForm, waitFor } from "@test/test-utils";
import { FileInput } from "@/FileInput/FileInput";

describe("FileInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<FileInput name="test" label="File" />, {
      defaultValues: { test: null },
    });

    expect(screen.getByText("File")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
