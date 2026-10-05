import preview from "../../.storybook/preview";
import { Stack } from "@mantine/core";
import { HueSlider } from "./HueSlider";

const meta = preview.meta({
  title: "Color/HueSlider",
  component: HueSlider,
  args: {
    "aria-label": "Hue",
  },
  render: (args) => (
    <Stack>
      <HueSlider {...args} />
    </Stack>
  ),
});

export const Primary = meta.story({
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
});
