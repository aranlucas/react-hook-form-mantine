import { act, screen, renderWithForm, waitFor } from "@test/test-utils";
import { TagsInput } from "@/TagsInput/TagsInput";

describe("TagsInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<TagsInput name="test" label="Tags" data={[]} />, {
      defaultValues: { test: [] },
    });

    expect(screen.getByText("Tags")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
