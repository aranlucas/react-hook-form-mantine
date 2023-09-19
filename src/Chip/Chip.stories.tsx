import { type Meta, type StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

export default {
  title: "Components/Chip",
  component: Chip,
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    name: "test",
    children: "Test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};
