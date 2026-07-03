import { render } from "../test/test-utils";
import { RangeSlider } from "./RangeSlider";

describe("RangeSlider", () => {
  it("renders with a name", () => {
    const { container } = render(<RangeSlider name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
