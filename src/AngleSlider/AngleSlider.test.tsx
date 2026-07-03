import { render } from "../test/test-utils";
import { AngleSlider } from "./AngleSlider";

describe("AngleSlider", () => {
  it("renders with a name", () => {
    const { container } = render(<AngleSlider name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
