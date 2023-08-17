import type { Meta, StoryObj } from "@storybook/react";
import { MonthPickerInput } from "./MonthPickerInput";
import { withReactHookForm } from "../stories/decorator";

export default {
  title: "Components/MonthPickerInput",
  component: MonthPickerInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof MonthPickerInput>;

type Story = StoryObj<typeof MonthPickerInput>;

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
