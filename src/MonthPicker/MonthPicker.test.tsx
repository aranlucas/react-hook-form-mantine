import { render } from "../test/test-utils";
import { MonthPicker } from "./MonthPicker";

describe("MonthPicker", () => {
  it("renders with a name", () => {
    const { container } = render(<MonthPicker name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
