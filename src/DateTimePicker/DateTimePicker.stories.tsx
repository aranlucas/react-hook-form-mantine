import { type Meta, type StoryObj } from "@storybook/react";
import { DateTimePicker } from "./DateTimePicker";

export default {
  title: "Components/DateTimePicker",
  component: DateTimePicker,
} satisfies Meta<typeof DateTimePicker>;

type Story = StoryObj<typeof DateTimePicker>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Pick date and time",
    placeholder: "Pick date and time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
