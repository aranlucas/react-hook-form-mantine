import { screen, renderWithForm, userEvent } from "@test/test-utils";
import { ChipGroup } from "@/Chip/ChipGroup/ChipGroup";
import { Chip } from "@/Chip/Chip";

describe("ChipGroup", () => {
  it("selects value on click", async () => {
    const user = userEvent.setup();

    const { form } = renderWithForm(
      <ChipGroup name="test">
        <Chip.Item value="a">A</Chip.Item>
        <Chip.Item value="b">B</Chip.Item>
      </ChipGroup>,
      { defaultValues: { test: "" } },
    );

    expect(screen.getByText("B")).toBeInTheDocument();
    await user.click(screen.getByText("A"));
    expect(form.getValues("test")).toBe("a");
  });
});
