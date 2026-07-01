import { type Meta, type StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "I agree to sell my privacy",
    description: "You can unsubscribe at any time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: true,
      },
    },
  },
};

export const Required: Story = {
  args: {
    name: "test",
    label: "I accept the terms and conditions",
    rules: {
      required: {
        value: true,
        message: "You must accept the terms",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};
