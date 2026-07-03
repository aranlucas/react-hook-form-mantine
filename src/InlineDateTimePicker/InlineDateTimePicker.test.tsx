import { render } from "../test/test-utils";
import { InlineDateTimePicker } from "./InlineDateTimePicker";

describe("InlineDateTimePicker", () => {
  it("renders with a name", () => {
    const { container } = render(<InlineDateTimePicker name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
