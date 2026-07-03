import { render, screen } from "../test/test-utils";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders with a name", () => {
    render(<Slider name="test" />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
});
