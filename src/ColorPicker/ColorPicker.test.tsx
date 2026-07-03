import { render } from "../test/test-utils";
import { ColorPicker } from "./ColorPicker";

describe("ColorPicker", () => {
  it("renders with a name", () => {
    const { container } = render(<ColorPicker name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
