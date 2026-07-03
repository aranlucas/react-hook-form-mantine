import { render, screen } from "../test/test-utils";
import { MonthPicker } from "./MonthPicker";

describe("MonthPicker", () => {
  it("renders with a name", () => {
    render(<MonthPicker name="test" />);
    expect(screen.getByText(`${new Date().getFullYear()}`)).toBeInTheDocument();
  });
});
