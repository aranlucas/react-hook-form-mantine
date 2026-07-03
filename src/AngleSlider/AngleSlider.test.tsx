import { render, screen } from "../test/test-utils";
import { AngleSlider } from "./AngleSlider";

describe("AngleSlider", () => {
  it("renders with a name", () => {
    render(<AngleSlider name="test" />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
});
