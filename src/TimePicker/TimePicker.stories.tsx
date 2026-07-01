import { type Meta, type StoryObj } from "@storybook/react";
import { TimePicker } from "./TimePicker";

export default {
  title: "Components/TimePicker",
  component: TimePicker,
} satisfies Meta<typeof TimePicker>;

type Story = StoryObj<typeof TimePicker>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Pick a time",
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
    label: "Time picker",
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
