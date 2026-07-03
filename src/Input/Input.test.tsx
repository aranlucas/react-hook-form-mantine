import { render, screen } from "../test/test-utils";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with a name", () => {
    render(<Input name="test" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
