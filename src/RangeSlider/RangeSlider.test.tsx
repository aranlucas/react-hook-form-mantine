import { render, screen } from "../test/test-utils";
import { RangeSlider } from "./RangeSlider";

describe("RangeSlider", () => {
  it("renders with a name", () => {
    render(<RangeSlider name="test" />);
    expect(screen.getAllByRole("slider")).toHaveLength(2);
  });
});
