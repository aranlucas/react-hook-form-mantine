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
