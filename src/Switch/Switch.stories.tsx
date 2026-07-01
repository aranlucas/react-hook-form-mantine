import { type Meta, type StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Enable notifications",
    description: "Receive email notifications",
  },
  parameters: {
    form: {
      defaultValues: {
        test: true,
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    name: "test",
    label: "Dark mode",
    description: "Use dark theme",
    thumbIcon: "🌙",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};
