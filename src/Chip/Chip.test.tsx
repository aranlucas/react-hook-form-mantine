import { render, screen } from "../test/test-utils";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders with a name", () => {
    render(<Chip name="test">Label</Chip>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
});
