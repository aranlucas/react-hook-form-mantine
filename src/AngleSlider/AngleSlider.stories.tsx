import preview from "../../.storybook/preview";
import { AngleSlider } from "./AngleSlider";

const meta = preview.meta({
  title: "Sliders/AngleSlider",
  component: AngleSlider,
  args: {
    "aria-label": "Angle",
  },
});

export const Primary = meta.story({
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
});

export const WithoutMarks = meta.story({
  args: {
    name: "test",
    size: 120,
  },
  parameters: {
    form: {
      defaultValues: {
        test: 0,
      },
    },
  },
});
