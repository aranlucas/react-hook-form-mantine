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
    label: "Pick a time",
    placeholder: "Pick a time",
    description: "Select a time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: null,
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    name: "test",
    label: "Time input",
    placeholder: "Pick a time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "14:30",
      },
    },
  },
};
