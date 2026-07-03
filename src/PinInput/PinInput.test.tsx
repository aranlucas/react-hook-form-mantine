import { render, screen } from "../test/test-utils";
import { PinInput } from "./PinInput";

describe("PinInput", () => {
  it("renders with a name", () => {
    render(<PinInput name="test" />);
    expect(screen.getAllByRole("textbox")).toHaveLength(4);
  });
});
