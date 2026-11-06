import { act, screen, renderWithForm, waitFor } from "@test/test-utils";
import { TextInput } from "@/TextInput/TextInput";

describe("TextInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<TextInput name="test" label="Name" />, {
      defaultValues: { test: "" },
    });

    expect(screen.getByText("Name")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
