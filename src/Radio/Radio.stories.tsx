import { type Meta, type StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "I cannot be unchecked",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};
