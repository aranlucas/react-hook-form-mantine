import { render, screen } from "../test/test-utils";
import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  it("renders with a name", () => {
    render(<DatePicker name="test" />);
    expect(screen.getAllByRole("columnheader").length).toBeGreaterThan(0);
  });
});
