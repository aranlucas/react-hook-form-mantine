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
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
