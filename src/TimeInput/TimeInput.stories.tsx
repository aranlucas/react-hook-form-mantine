import { type Meta, type StoryObj } from "@storybook/react";
import { TimeInput } from "./TimeInput";

export default {
  title: "Components/TimeInput",
  component: TimeInput,
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
