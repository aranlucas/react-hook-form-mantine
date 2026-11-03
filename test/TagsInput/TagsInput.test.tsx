import { screen, renderWithForm, waitFor } from "@test/test-utils";
import { TagsInput } from "@/TagsInput/TagsInput";

describe("TagsInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<TagsInput name="test" label="Tags" data={[]} />, {
      defaultValues: { test: [] },
    });

    expect(screen.getByText("Tags")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
