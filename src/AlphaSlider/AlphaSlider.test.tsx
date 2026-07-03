import { render } from "../test/test-utils";
import { AlphaSlider } from "./AlphaSlider";

describe("AlphaSlider", () => {
  it("renders with a name", () => {
    const { container } = render(<AlphaSlider name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
