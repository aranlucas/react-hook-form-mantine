import { render } from "../test/test-utils";
import { YearPicker } from "./YearPicker";

describe("YearPicker", () => {
  it("renders with a name", () => {
    const { container } = render(<YearPicker name="test" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
