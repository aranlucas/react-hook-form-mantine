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
    children: "React",
  },
  parameters: {
    form: {
      defaultValues: {
        test: true,
      },
    },
  },
};

export const Unchecked: Story = {
  args: {
    name: "test",
    children: "Vue",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};
