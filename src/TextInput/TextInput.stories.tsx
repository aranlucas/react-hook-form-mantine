import preview from "../../.storybook/preview";
import { expect } from "storybook/test";
import { TextInput } from "./TextInput";

const meta = preview.meta({
  title: "Inputs/TextInput",
  component: TextInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    placeholder: "Your name",
    label: "Full name",
    description: "First and last name",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
});

Primary.test(
  "calls your onChange and onBlur alongside the form's",
  async ({ args, canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: "Full name" });

    await userEvent.type(input, "Ada");
    await userEvent.tab();

    await expect(args.onChange).toHaveBeenCalledTimes(3);
    await expect(args.onBlur).toHaveBeenCalledOnce();
    await expect(input).toHaveValue("Ada");
    await expect(canvas.getByRole("status")).toHaveTextContent("Unsaved changes");
  },
);

export const WithValidation = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    placeholder: "Your email",
    label: "Email",
    rules: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
});

WithValidation.test(
  "focuses the field and shows the error on submit",
  async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Submit" }));

    await expect(await canvas.findByText("Email is required")).toBeVisible();
    await expect(canvas.getByRole("textbox", { name: "Email" })).toHaveFocus();
  },
);

WithValidation.test("validates the pattern as you type", async ({ canvas, userEvent }) => {
  await userEvent.type(canvas.getByRole("textbox", { name: "Email" }), "not-an-email");

  await expect(await canvas.findByText("Invalid email address")).toBeVisible();
  await expect(canvas.getByRole("textbox", { name: "Email" })).toHaveAttribute(
    "aria-invalid",
    "true",
  );
});

WithValidation.test("submits a valid value", async ({ canvas, userEvent }) => {
  await userEvent.type(canvas.getByRole("textbox", { name: "Email" }), "ada@example.com");
  await userEvent.click(canvas.getByRole("button", { name: "Submit" }));

  await expect(canvas.getByRole("status")).toHaveTextContent("Submitted");
  await expect(canvas.queryByText("Invalid email address")).not.toBeInTheDocument();
});

/** A play function runs when the story opens: watch it fill the field in the Interactions panel. */
export const Autofilled = meta.story({
  args: {
    name: "test",
    label: "Display name",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByRole("textbox", { name: "Display name" }), "Grace Hopper");
  },
});
