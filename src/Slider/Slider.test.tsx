import { render } from "../test/test-utils";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders with a name", () => {
    const { container } = render(<Slider name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
