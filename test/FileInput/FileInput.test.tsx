import { screen, renderWithForm, waitFor } from "@test/test-utils";
import { FileInput } from "@/FileInput/FileInput";

describe("FileInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<FileInput name="test" label="File" />, {
      defaultValues: { test: null },
    });

    expect(screen.getByText("File")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
