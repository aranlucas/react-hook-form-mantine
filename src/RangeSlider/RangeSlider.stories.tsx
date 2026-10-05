import preview from "../../.storybook/preview";
import { RangeSlider } from "./RangeSlider";

const meta = preview.meta({
  title: "Sliders/RangeSlider",
  component: RangeSlider,
  args: {
    thumbFromLabel: "Minimum price",
    thumbToLabel: "Maximum price",
  },
});

export const Primary = meta.story({
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
});

export const WithStep = meta.story({
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
});
