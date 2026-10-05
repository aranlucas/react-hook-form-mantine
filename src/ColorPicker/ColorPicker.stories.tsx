import preview from "../../.storybook/preview";
import { ColorPicker } from "./ColorPicker";

const meta = preview.meta({
  title: "Color/ColorPicker",
  component: ColorPicker,
  args: {
    saturationLabel: "Saturation",
    hueLabel: "Hue",
    alphaLabel: "Alpha",
  },
});

export const Primary = meta.story({
  args: {
    name: "test",
    format: "rgba",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "rgba(47, 119, 150, 0.7)",
      },
    },
  },
});

export const HexFormat = meta.story({
  args: {
    name: "test",
    format: "hex",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "#2f7796",
      },
    },
  },
});
