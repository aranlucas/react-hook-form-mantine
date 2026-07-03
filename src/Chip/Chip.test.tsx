import { render } from "../test/test-utils";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders with a name", () => {
    const { container } = render(<Chip name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
