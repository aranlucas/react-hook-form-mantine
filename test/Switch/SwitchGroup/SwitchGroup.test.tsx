import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { SwitchGroup } from "@/Switch/SwitchGroup/SwitchGroup";
import { Switch } from "@/Switch/Switch";

describe("SwitchGroup", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(
      <SwitchGroup name="test" label="Options">
        {null}
      </SwitchGroup>,
      {
        defaultValues: { test: [] },
      },
    );

    expect(screen.getByText("Options")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
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
