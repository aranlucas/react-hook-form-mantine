import { render, screen } from "../test/test-utils";
import { SegmentedControl } from "./SegmentedControl";

describe("SegmentedControl", () => {
  it("renders with a name", () => {
    render(<SegmentedControl name="test" data={["React", "Vue", "Svelte"]} />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
