import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { DateInput } from "@/DateInput/DateInput";

describe("DateInput", () => {
  it("displays error message", async () => {
    const { form } = renderWithForm(<DateInput name="test" label="Date" />, {
      defaultValues: { test: null },
    });

    expect(screen.getByText("Date")).toBeInTheDocument();

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
      <DateInput name="test" label="Label" valueFormat="YYYY-MM-DD" />,
      {
        defaultValues: { test: null },
      },
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "2024-01-15");
    expect(form.getValues("test")).toBe("2024-01-15");
  });
});
