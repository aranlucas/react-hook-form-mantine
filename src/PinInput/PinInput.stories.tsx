import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { PinInput } from "./PinInput";

export default {
  component: PinInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof PinInput>;

type Story = StoryObj<typeof PinInput>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
