import { type Meta, type StoryObj } from "@storybook/react";
import { Stack } from "@mantine/core";
import { HueSlider } from "./HueSlider";

export default {
  title: "Components/HueSlider",
  component: HueSlider,
  render: (args) => (
    <Stack>
      <HueSlider {...args} />
    </Stack>
  ),
} satisfies Meta<typeof HueSlider>;

type Story = StoryObj<typeof HueSlider>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: 200,
      },
    },
  },
};
