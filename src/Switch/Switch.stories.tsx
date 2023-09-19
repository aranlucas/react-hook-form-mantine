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
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};
