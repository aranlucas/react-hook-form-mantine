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
