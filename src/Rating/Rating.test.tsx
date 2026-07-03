import { render } from "../test/test-utils";
import { Rating } from "./Rating";

describe("Rating", () => {
  it("renders with a name", () => {
    const { container } = render(<Rating name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
