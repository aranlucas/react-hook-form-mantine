import { render, screen } from "../test/test-utils";
import { ColorPicker } from "./ColorPicker";

describe("ColorPicker", () => {
  it("renders with a name", () => {
    render(<ColorPicker name="test" />);
    expect(screen.getAllByRole("slider").length).toBeGreaterThan(0);
  });
});
