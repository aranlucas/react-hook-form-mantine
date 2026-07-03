import { render, screen } from "../test/test-utils";
import { Rating } from "./Rating";

describe("Rating", () => {
  it("renders with a name", () => {
    render(<Rating name="test" />);
    expect(screen.getAllByRole("radio").length).toBeGreaterThan(0);
  });
});
