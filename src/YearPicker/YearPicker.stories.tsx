import { type Meta, type StoryObj } from "@storybook/react";
import { YearPicker } from "./YearPicker";

export default {
  title: "Components/YearPicker",
  component: YearPicker,
} satisfies Meta<typeof YearPicker>;

type Story = StoryObj<typeof YearPicker>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "2026-01-01",
      },
    },
  },
};
