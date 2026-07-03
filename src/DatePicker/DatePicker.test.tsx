import { render } from "../test/test-utils";
import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  it("renders with a name", () => {
    const { container } = render(<DatePicker name="test" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
