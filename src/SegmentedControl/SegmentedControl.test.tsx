import { render } from "../test/test-utils";
import { SegmentedControl } from "./SegmentedControl";

describe("SegmentedControl", () => {
  it("renders with a name", () => {
    const { container } = render(
      <SegmentedControl name="test" data={["React", "Vue", "Svelte"]} />,
    );
    expect(container.firstChild).toBeTruthy();
  });
});
