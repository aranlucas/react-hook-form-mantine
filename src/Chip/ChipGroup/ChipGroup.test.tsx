import { render, screen, renderWithForm, userEvent } from "../../test/test-utils";
import { ChipGroup } from "./ChipGroup";
import { Chip } from "../Chip";

describe("ChipGroup", () => {
  it("renders with children", () => {
    render(
      <ChipGroup name="test">
        <Chip.Item value="a">A</Chip.Item>
        <Chip.Item value="b">B</Chip.Item>
      </ChipGroup>,
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("selects value on click", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(
      <ChipGroup name="test">
        <Chip.Item value="a">A</Chip.Item>
        <Chip.Item value="b">B</Chip.Item>
      </ChipGroup>,
      { defaultValues: { test: "" } },
    );
    await user.click(screen.getByText("A"));
    expect(form.getValues("test")).toBe("a");
  });
});
