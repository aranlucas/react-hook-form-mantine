import { render } from "../test/test-utils";
import { PinInput } from "./PinInput";

describe("PinInput", () => {
  it("renders with a name", () => {
    const { container } = render(<PinInput name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
