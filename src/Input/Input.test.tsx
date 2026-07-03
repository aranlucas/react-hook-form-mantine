import { render } from "../test/test-utils";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with a name", () => {
    const { container } = render(<Input name="test" />);
    expect(container.firstChild).toBeTruthy();
  });
});
