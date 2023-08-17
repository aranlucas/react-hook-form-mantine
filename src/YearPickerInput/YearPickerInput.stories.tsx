import type { Meta, StoryObj } from "@storybook/react";
import { YearPickerInput } from "./YearPickerInput";
import { withReactHookForm } from "../stories/decorator";

export default {
  title: "Components/YearPickerInput",
  component: YearPickerInput,
  decorators: [withReactHookForm],
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
