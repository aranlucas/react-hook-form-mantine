import { type Meta, type StoryObj } from "@storybook/react";
import { MonthPickerInput } from "./MonthPickerInput";

export default {
  title: "Components/MonthPickerInput",
  component: MonthPickerInput,
} satisfies Meta<typeof MonthPickerInput>;

type Story = StoryObj<typeof MonthPickerInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Pick a month",
    placeholder: "Pick a month",
    description: "Select a month from the calendar",
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
    label: "Month input",
    placeholder: "Pick a month",
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
