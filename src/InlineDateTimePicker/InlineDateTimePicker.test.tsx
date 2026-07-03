import { render, screen } from "../test/test-utils";
import { InlineDateTimePicker } from "./InlineDateTimePicker";

describe("InlineDateTimePicker", () => {
  it("renders with a name", () => {
    render(<InlineDateTimePicker name="test" />);
    expect(screen.getAllByRole("spinbutton").length).toBeGreaterThan(0);
  });
});
