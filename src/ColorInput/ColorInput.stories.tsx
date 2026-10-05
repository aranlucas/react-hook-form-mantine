import preview from "../../.storybook/preview";
import { ColorInput } from "./ColorInput";

const meta = preview.meta({
  title: "Color/ColorInput",
  component: ColorInput,
  args: {
    eyeDropperButtonProps: { "aria-label": "Pick a color from the screen" },
  },
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Pick a color",
    placeholder: "Pick color",
    description: "Select or enter a color",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "#C5D899",
      },
    },
  },
});

export const Empty = meta.story({
  args: {
    name: "test",
    label: "Color input",
    placeholder: "Pick color",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
});
