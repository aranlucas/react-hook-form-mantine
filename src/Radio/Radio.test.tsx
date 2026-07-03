import { render, screen } from "../test/test-utils";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders with a name", () => {
    render(<Radio name="test" />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });
});
