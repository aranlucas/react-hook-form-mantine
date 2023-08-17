import type { Meta, StoryObj } from "@storybook/react";
import { DatePickerInput } from "./DatePickerInput";
import { withReactHookForm } from "../stories/decorator";

export default {
  title: "Components/DatePickerInput",
  component: DatePickerInput,
  decorators: [withReactHookForm],
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
