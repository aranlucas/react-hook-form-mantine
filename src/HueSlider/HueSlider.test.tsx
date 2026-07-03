import { render } from "../test/test-utils";
import { HueSlider } from "./HueSlider";

describe("HueSlider", () => {
  it("renders with a name", () => {
    const { container } = render(<HueSlider name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
