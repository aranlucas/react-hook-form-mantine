import { type Meta, type StoryObj } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";

export default {
  title: "Components/PasswordInput",
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

type Story = StoryObj<typeof PasswordInput>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Password",
    label: "Password",
    description: "Password must include at least one letter, number and special character",
    visible: false,
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
    placeholder: "Password",
    label: "Password",
    rules: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
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
};
