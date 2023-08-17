import type { Meta, StoryObj } from "@storybook/react";
import { TimeInput } from "./TimeInput";
import { withReactHookForm } from "../stories/decorator";

export default {
  title: "Components/TimeInput",
  component: TimeInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof TimeInput>;

type Story = StoryObj<typeof TimeInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Current time",
    placeholder: "Current time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
