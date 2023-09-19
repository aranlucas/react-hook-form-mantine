import { type Meta, type StoryObj } from "@storybook/react";
import { Rating } from "./Rating";

export default {
  title: "Components/Rating",
  component: Rating,
} satisfies Meta<typeof Rating>;

type Story = StoryObj<typeof Rating>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: 2,
      },
    },
  },
};
