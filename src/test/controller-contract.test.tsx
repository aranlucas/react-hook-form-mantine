import { vi } from "vitest";
import { Checkbox, CheckboxGroup, DateInput, Select, Slider, TextInput } from "../index";
import { act, fireEvent, renderWithForm, screen, userEvent, waitFor } from "./test-utils";

const controls = [
  { label: "text", Input: TextInput, initial: "", role: "textbox", extra: {} },
  { label: "select", Input: Select, initial: "", role: "combobox", extra: { data: ["A", "B"] } },
  { label: "checkbox", Input: Checkbox, initial: false, role: "checkbox", extra: {} },
  {
    label: "checkbox group",
    Input: CheckboxGroup,
    initial: [],
    role: "checkbox",
    extra: { children: <Checkbox.Item value="a" label="A" /> },
  },
  { label: "slider", Input: Slider, initial: 0, role: "slider", extra: {} },
  { label: "date", Input: DateInput, initial: null, role: "textbox", extra: {} },
];

describe("controller lifecycle contracts", () => {
  it.each(controls)(
    "$label composes custom blur with touched state and validation",
    async ({ Input, initial, role, extra }) => {
      const onBlur = vi.fn();

      const { form } = renderWithForm(
        <Input
          name="test"
          onBlur={onBlur}
          rules={{ validate: () => "Invalid value" }}
          {...extra}
        />,
        { defaultValues: { test: initial }, mode: "onBlur" },
      );

      const input = screen.getByRole(role);
      fireEvent.blur(input);
      await waitFor(() => {
        expect(form.getFieldState("test").isTouched).toBe(true);
        expect(form.getFieldState("test").error?.message).toBe("Invalid value");
      });
      expect(onBlur).toHaveBeenCalledTimes(1);
      expect(onBlur.mock.calls[0][0].target).toBe(input);
    },
  );

  it.each(controls)(
    "$label omits disabled values from submission and restores them when enabled",
    async ({ Input, initial, extra }) => {
      const onSubmit = vi.fn();

      const { form, rerender } = renderWithForm(<Input name="test" disabled {...extra} />, {
        defaultValues: { test: initial },
      });

      await act(async () => {
        await form.handleSubmit(onSubmit)();
      });
      expect(onSubmit.mock.calls[0][0].test).toBeUndefined();
      rerender(<Input name="test" disabled={false} {...extra} />);
      await act(async () => {
        await form.handleSubmit(onSubmit)();
      });
      expect(onSubmit.mock.calls[1][0].test).toEqual(initial);
    },
  );

  it("preserves the existing CheckboxGroup external value contract", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    const group = (value: string[]) => (
      <CheckboxGroup name="test" value={value} onChange={onChange}>
        <Checkbox.Item value="a" label="A" />
        <Checkbox.Item value="b" label="B" />
      </CheckboxGroup>
    );

    const { form, rerender } = renderWithForm(group(["b"]), {
      defaultValues: { test: ["a"] },
    });

    expect(screen.getByRole("checkbox", { name: "A" })).not.toBeChecked();
    expect(screen.getByRole("checkbox", { name: "B" })).toBeChecked();
    await user.click(screen.getByRole("checkbox", { name: "A" }));
    expect(onChange).toHaveBeenCalledWith(["b", "a"]);
    expect(form.getValues("test")).toEqual(["b", "a"]);
    rerender(group(["a"]));
    expect(screen.getByRole("checkbox", { name: "A" })).toBeChecked();
    expect(screen.getByRole("checkbox", { name: "B" })).not.toBeChecked();
  });

  it("inherits form-level disabled state when the input does not override it", async () => {
    const onSubmit = vi.fn();

    const { form } = renderWithForm(<TextInput name="test" />, {
      defaultValues: { test: "saved" },
      disabled: true,
    });

    expect(screen.getByRole("textbox")).toBeDisabled();
    await act(async () => {
      await form.handleSubmit(onSubmit)();
    });
    expect(onSubmit.mock.calls[0][0].test).toBeUndefined();
  });

  it("preserves custom change events, reset, focus on error, and unregister", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    const { form, rerender } = renderWithForm(
      <TextInput
        name="test"
        onChange={onChange}
        shouldUnregister
        rules={{ required: "Required" }}
      />,
      { defaultValues: { test: "" } },
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "saved");
    expect(onChange).toHaveBeenCalledTimes(5);
    expect(form.getValues("test")).toBe("saved");
    act(() => form.reset({ test: "reset" }));
    expect(input).toHaveValue("reset");
    act(() => form.reset({ test: "" }));
    input.blur();
    await act(async () => {
      await form.trigger("test", { shouldFocus: true });
    });
    expect(input).toHaveFocus();
    rerender(<></>);
    expect(form.getValues()).toEqual({});
  });

  it("preserves both Select onChange arguments and controller value", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    const { form } = renderWithForm(
      <Select
        name="test"
        data={[{ value: "a", label: "A" }]}
        onChange={onChange}
        comboboxProps={{ transitionProps: { duration: 0 }, hideDetached: false }}
      />,
      { defaultValues: { test: null } },
    );

    await user.click(screen.getByRole("combobox"));
    await user.click(await screen.findByRole("option", { name: "A" }));
    expect(form.getValues("test")).toBe("a");
    expect(onChange).toHaveBeenCalledWith("a", expect.objectContaining({ value: "a", label: "A" }));
  });
});
