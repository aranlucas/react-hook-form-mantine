import { render, screen, renderWithForm, waitFor } from "@test/test-utils";
import { TextInput } from "@/TextInput/TextInput";

describe("TextInput", () => {
  it("renders with a name", () => {
    render(<TextInput name="test" label="Name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<TextInput name="test" label="Name" />, {
      defaultValues: { test: "" },
    });

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
