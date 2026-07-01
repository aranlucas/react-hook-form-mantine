import { type Meta, type StoryObj } from "@storybook/react";
import { AngleSlider } from "./AngleSlider";

export default {
  title: "Components/AngleSlider",
  component: AngleSlider,
} satisfies Meta<typeof AngleSlider>;

type Story = StoryObj<typeof AngleSlider>;

export const Primary: Story = {
  args: {
    name: "test",
    marks: [
      { value: 0, label: "0" },
      { value: 90, label: "90" },
      { value: 180, label: "180" },
      { value: 270, label: "270" },
    ],
    size: 96,
  },
  parameters: {
    form: {
      defaultValues: {
        test: 45,
      },
    },
  },
};
