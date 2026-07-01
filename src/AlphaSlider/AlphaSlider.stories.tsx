import { useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { Stack, ColorPicker } from "@mantine/core";
import { AlphaSlider } from "./AlphaSlider";

export default {
  title: "Components/AlphaSlider",
  component: AlphaSlider,
  render: (args) => {
    const [color, setColor] = useState("#228be6");
    return (
      <Stack>
        <ColorPicker value={color} onChange={setColor} />
        <AlphaSlider {...args} color={color} />
      </Stack>
    );
  },
} satisfies Meta<typeof AlphaSlider>;

type Story = StoryObj<typeof AlphaSlider>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: 0.5,
      },
    },
  },
};
