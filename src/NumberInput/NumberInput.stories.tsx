import { type Meta, type StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";

export default {
  title: "Components/NumberInput",
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

type Story = StoryObj<typeof NumberInput>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Your age",
    label: "Your age",
  },
  parameters: {
    form: {
      defaultValues: {
        test: 18,
      },
    },
  },
};
