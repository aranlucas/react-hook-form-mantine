import { type Meta, type StoryObj } from "@storybook/react";
import { DateInput } from "./DateInput";

export default {
  title: "Components/DateInput",
  component: DateInput,
} satisfies Meta<typeof DateInput>;

type Story = StoryObj<typeof DateInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Pick a date",
    placeholder: "Pick a date",
    description: "Select any date",
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
    placeholder: "Pick a date",
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
