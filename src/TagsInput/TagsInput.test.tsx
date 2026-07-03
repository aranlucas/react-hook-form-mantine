import { render, screen, renderWithForm, act, waitFor } from "../test/test-utils";
import { TagsInput } from "./TagsInput";

describe("TagsInput", () => {
  it("renders with a name", () => {
    render(<TagsInput name="test" label="Tags" data={[]} />);
    expect(screen.getByText("Tags")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<TagsInput name="test" label="Tags" data={[]} />, {
      defaultValues: { test: [] },
    });
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
