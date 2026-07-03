import { render, screen, renderWithForm, act, waitFor, userEvent } from "../../test/test-utils";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "../Radio";

describe("RadioGroup", () => {
  it("renders with a name", () => {
    render(<RadioGroup name="test" label="Options" />);
    expect(screen.getByText("Options")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<RadioGroup name="test" label="Options" />, {
      defaultValues: { test: "" },
    });
    await act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("toggles value on click", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(
      <RadioGroup name="test" label="Options">
        <Radio.Item value="a" label="A" />
        <Radio.Item value="b" label="B" />
      </RadioGroup>,
      { defaultValues: { test: "" } },
    );
    await user.click(screen.getByText("A"));
    expect(form.getValues("test")).toBe("a");
  });
});
