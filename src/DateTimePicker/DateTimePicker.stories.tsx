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
    description: "Select date and time",
    valueFormat: "YYYY-MM-DD HH:mm",
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
    label: "Date and time",
    placeholder: "Pick date and time",
    valueFormat: "MMMM DD, YYYY hh:mm A",
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
