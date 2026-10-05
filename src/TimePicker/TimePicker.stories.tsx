import preview from "../../.storybook/preview";
import { TimePicker } from "./TimePicker";

const meta = preview.meta({
  title: "Dates/TimePicker",
  component: TimePicker,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Pick a time",
    description: "Select a time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: null,
      },
    },
  },
});

export const WithValue = meta.story({
  args: {
    name: "test",
    label: "Time picker",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "14:30",
      },
    },
  },
});
