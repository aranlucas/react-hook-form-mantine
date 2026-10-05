import preview from "../../.storybook/preview";
import { useState } from "react";
import { Stack, ColorPicker } from "@mantine/core";
import { AlphaSlider } from "./AlphaSlider";

const meta = preview.meta({
  title: "Color/AlphaSlider",
  component: AlphaSlider,
  args: {
    "aria-label": "Alpha",
    // Replaced by the picker's color in render.
    color: "#228be6",
  },
  render: (args) => {
    const [color, setColor] = useState("#228be6");

    return (
      <Stack>
        <ColorPicker
          value={color}
          onChange={setColor}
          saturationLabel="Saturation"
          hueLabel="Hue"
        />
        <AlphaSlider {...args} color={color} />
      </Stack>
    );
  },
});

export const Primary = meta.story({
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
});
