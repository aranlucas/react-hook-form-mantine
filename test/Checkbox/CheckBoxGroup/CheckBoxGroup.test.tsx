import { screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { CheckboxGroup } from "@/Checkbox/CheckBoxGroup/CheckBoxGroup";
import { Checkbox } from "@/Checkbox/Checkbox";

describe("CheckboxGroup", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(
      <CheckboxGroup name="test" label="Options">
        {null}
      </CheckboxGroup>,
      {
        defaultValues: { test: [] },
      },
    );

    expect(screen.getByText("Options")).toBeInTheDocument();

    await waitFor(() => {
      form.setError("test", { message: "Required" });
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
