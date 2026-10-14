import { render, screen } from "@test/test-utils";
import { AlphaSlider } from "@/AlphaSlider/AlphaSlider";

describe("AlphaSlider", () => {
  it("renders with a name", () => {
    render(<AlphaSlider name="test" color="#228be6" />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
});
