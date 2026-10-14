import { render, screen } from "@test/test-utils";
import { YearPicker } from "@/YearPicker/YearPicker";

describe("YearPicker", () => {
  it("renders with a name", () => {
    render(<YearPicker name="test" />);
    expect(screen.getByText(`${new Date().getFullYear()}`)).toBeInTheDocument();
  });
});
