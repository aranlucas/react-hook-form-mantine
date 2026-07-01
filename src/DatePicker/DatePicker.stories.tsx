import { type Meta, type StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

type Story = StoryObj<typeof DatePicker>;

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
