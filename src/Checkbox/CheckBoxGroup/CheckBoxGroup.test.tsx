import { render, screen, renderWithForm, act, waitFor, userEvent } from "../../test/test-utils";
import { CheckboxGroup } from "./CheckBoxGroup";
import { Checkbox } from "../Checkbox";

describe("CheckboxGroup", () => {
  it("renders with a name", () => {
    render(<CheckboxGroup name="test" label="Options" />);
    expect(screen.getByText("Options")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<CheckboxGroup name="test" label="Options" />, {
      defaultValues: { test: [] },
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
      <CheckboxGroup name="test" label="Options">
        <Checkbox.Item value="a" label="A" />
        <Checkbox.Item value="b" label="B" />
      </CheckboxGroup>,
      { defaultValues: { test: [] } },
    );
    await user.click(screen.getByText("A"));
    expect(form.getValues("test")).toEqual(["a"]);
  });
});
