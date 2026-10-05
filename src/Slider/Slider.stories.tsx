import preview from "../../.storybook/preview";
import { Slider } from "./Slider";

const meta = preview.meta({
  title: "Sliders/Slider",
  component: Slider,
  args: {
    thumbLabel: "Volume",
  },
});

export const Primary = meta.story({
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
        test: 50,
      },
    },
  },
});

export const WithMarks = meta.story({
  args: {
    name: "test",
    marks: [
      { value: 0, label: "0" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 75, label: "75" },
      { value: 100, label: "100" },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: 25,
      },
    },
  },
});
