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
    rules: {
      required: {
        value: true,
        message: "Need to be true",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: true,
      },
    },
  },
};
