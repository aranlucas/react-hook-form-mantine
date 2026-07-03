import { render, screen } from "../test/test-utils";
import { HueSlider } from "./HueSlider";

describe("HueSlider", () => {
  it("renders with a name", () => {
    render(<HueSlider name="test" />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
});
