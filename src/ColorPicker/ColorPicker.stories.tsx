import { type Meta, type StoryObj } from "@storybook/react";
import { ColorPicker } from "./ColorPicker";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
} satisfies Meta<typeof ColorPicker>;

type Story = StoryObj<typeof ColorPicker>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "rgba(47, 119, 150, 0.7)",
      },
    },
  },
};
