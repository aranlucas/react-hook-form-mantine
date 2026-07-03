import { render } from "../test/test-utils";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders with a name", () => {
    const { container } = render(<Radio name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
