import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "./DateInput";
import { withReactHookForm } from "../stories/decorator";

export default {
  title: "Components/DateInput",
  component: DateInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof DateInput>;

type Story = StoryObj<typeof DateInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Date input",
    placeholder: "Date input",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
