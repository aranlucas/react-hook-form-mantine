import { type Meta, type StoryObj } from "@storybook/react";
import { DatePickerInput } from "./DatePickerInput";

export default {
  title: "Components/DatePickerInput",
  component: DatePickerInput,
} satisfies Meta<typeof DatePickerInput>;

type Story = StoryObj<typeof DatePickerInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Pick date",
    placeholder: "Pick date",
    description: "Select a date from the calendar",
    valueFormat: "YYYY-MM-DD",
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
    label: "Date input",
    placeholder: "Pick date",
    valueFormat: "MMMM DD, YYYY",
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
