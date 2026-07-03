import { render } from "../../test/test-utils";
import { ChipGroup } from "./ChipGroup";

describe("ChipGroup", () => {
  it("renders with a name", () => {
    const { container } = render(<ChipGroup name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
