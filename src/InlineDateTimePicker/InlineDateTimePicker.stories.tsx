import { type Meta, type StoryObj } from "@storybook/react";
import { InlineDateTimePicker } from "./InlineDateTimePicker";

export default {
  title: "Components/InlineDateTimePicker",
  component: InlineDateTimePicker,
} satisfies Meta<typeof InlineDateTimePicker>;

type Story = StoryObj<typeof InlineDateTimePicker>;

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
        test: "2026-01-15 14:30:00",
      },
    },
  },
};
