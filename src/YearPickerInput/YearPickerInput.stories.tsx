import { type Meta, type StoryObj } from "@storybook/react";
import { YearPickerInput } from "./YearPickerInput";

export default {
  title: "Components/YearPickerInput",
  component: YearPickerInput,
} satisfies Meta<typeof YearPickerInput>;

type Story = StoryObj<typeof YearPickerInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Pick a year",
    placeholder: "Pick a year",
    description: "Select a year",
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
    label: "Year input",
    placeholder: "Pick a year",
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
