import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { DateTimePicker } from "@/DateTimePicker/DateTimePicker";

describe("DateTimePicker", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<DateTimePicker name="test" label="DateTime" />, {
      defaultValues: { test: null },
    });

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("updates value on user input", async () => {
    const user = userEvent.setup();

    const { form } = renderWithForm(
      <DateTimePicker
        name="test"
        label="Label"
        defaultDate="2024-01-01"
        defaultTimeValue="00:00"
      />,
      {
        defaultValues: { test: null },
      },
    );

    await user.click(screen.getByLabelText("Label"));
    await waitFor(() => expect(screen.getByText("15")).toBeInTheDocument());
    await user.click(screen.getByText("15"));
    expect(form.getValues("test")).toBe("2024-01-15 00:00:00");
  });
});
