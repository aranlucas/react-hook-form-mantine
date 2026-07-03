import { render, screen } from "../test/test-utils";
import { AlphaSlider } from "./AlphaSlider";

describe("AlphaSlider", () => {
  it("renders with a name", () => {
    render(<AlphaSlider name="test" />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
});
