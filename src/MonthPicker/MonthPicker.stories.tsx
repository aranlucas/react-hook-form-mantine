import { type Meta, type StoryObj } from "@storybook/react";
import { MonthPicker } from "./MonthPicker";

export default {
  title: "Components/MonthPicker",
  component: MonthPicker,
} satisfies Meta<typeof MonthPicker>;

type Story = StoryObj<typeof MonthPicker>;

export const Primary: Story = {
  args: {
    name: "test",
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
  },
  parameters: {
    form: {
      defaultValues: {
        test: new Date(),
      },
    },
  },
};
