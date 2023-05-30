import { render, screen } from "../test/test-utils";
import { TransferList } from "./TransferList";

test("TransferList", () => {
  it("should increment count on click", async () => {
    render(<TransferList name="test" />);

    const input = screen.getByRole("textbox", {
      name: /test/i,
    });

    expect(input).toBeInTheDocument();
  });
});
