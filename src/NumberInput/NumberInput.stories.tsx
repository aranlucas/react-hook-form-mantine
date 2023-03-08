import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { NumberInput } from "./NumberInput";

export default {
  component: NumberInput,
  decorators: [withReactHookForm],
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
