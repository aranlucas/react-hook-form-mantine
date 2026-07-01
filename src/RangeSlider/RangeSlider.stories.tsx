import { type Meta, type StoryObj } from "@storybook/react";
import { RangeSlider } from "./RangeSlider";

export default {
  title: "Components/RangeSlider",
  component: RangeSlider,
} satisfies Meta<typeof RangeSlider>;

type Story = StoryObj<typeof RangeSlider>;

export const Primary: Story = {
  args: {
    name: "test",
    min: 0,
    max: 100,
    minRange: 5,
    marks: [
      { value: 0, label: "$0" },
      { value: 50, label: "$50" },
      { value: 100, label: "$100" },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: [20, 80],
      },
    },
  },
};

export const WithStep: Story = {
  args: {
    name: "test",
    min: 0,
    max: 100,
    step: 10,
    minRange: 20,
  },
  parameters: {
    form: {
      defaultValues: {
        test: [30, 70],
      },
    },
  },
};
