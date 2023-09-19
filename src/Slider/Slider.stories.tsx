import { type Meta, type StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  args: {
    name: "test",
    marks: [
      { value: 20, label: "20%" },
      { value: 50, label: "50%" },
      { value: 80, label: "80%" },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};
