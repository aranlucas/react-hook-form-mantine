import { screen, renderWithForm, waitFor } from "@test/test-utils";
import { TextInput } from "@/TextInput/TextInput";

describe("TextInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<TextInput name="test" label="Name" />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Name")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
