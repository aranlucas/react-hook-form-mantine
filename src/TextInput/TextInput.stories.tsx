import { type Meta, type StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import { TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
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
};

export const WithValidation: Story = {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Email" });
    const submit = canvas.getByRole("button", { name: "Submit" });

    await userEvent.click(submit);
    await expect(await canvas.findByText("Email is required")).toBeVisible();
    await expect(input).toHaveFocus();

    await userEvent.type(input, "not-an-email");
    await expect(await canvas.findByText("Invalid email address")).toBeVisible();

    await userEvent.clear(input);
    await userEvent.type(input, "ada@example.com");
    await userEvent.click(submit);
    await expect(await canvas.findByText("onSubmit result")).toBeVisible();
  },
};
