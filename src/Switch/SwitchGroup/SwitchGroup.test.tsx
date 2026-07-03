import { render, screen, renderWithForm, waitFor, userEvent } from "../../test/test-utils";
import { SwitchGroup } from "./SwitchGroup";
import { Switch } from "../Switch";

describe("SwitchGroup", () => {
  it("renders with a name", () => {
    render(<SwitchGroup name="test" label="Options" />);
    expect(screen.getByText("Options")).toBeInTheDocument();
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<SwitchGroup name="test" label="Options" />, {
      defaultValues: { test: [] },
    });
    await waitFor(() => {
      form.setError("test", { message: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("toggles value on click", async () => {
    const user = userEvent.setup();
    const { form } = renderWithForm(
      <SwitchGroup name="test" label="Options">
        <Switch.Item value="a" label="A" />
        <Switch.Item value="b" label="B" />
      </SwitchGroup>,
      { defaultValues: { test: [] } },
    );
    await user.click(screen.getByText("A"));
    expect(form.getValues("test")).toEqual(["a"]);
  });
});
