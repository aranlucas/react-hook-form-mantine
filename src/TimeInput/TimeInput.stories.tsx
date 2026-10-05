import preview from "../../.storybook/preview";
import { TimeInput } from "./TimeInput";

const meta = preview.meta({
  title: "Dates/TimeInput",
  component: TimeInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Pick a time",
    placeholder: "Pick a time",
    description: "Select a time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
});

export const WithValue = meta.story({
  args: {
    name: "test",
    label: "Time input",
    placeholder: "Pick a time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "14:30",
      },
    },
  },
});
