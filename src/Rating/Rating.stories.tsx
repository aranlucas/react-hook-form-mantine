import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { Rating } from "./Rating";

export default {
  title: "Components/Rating",
  component: Rating,
  decorators: [withReactHookForm],
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
