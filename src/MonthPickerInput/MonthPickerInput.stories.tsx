import preview from "../../.storybook/preview";
import { MonthPickerInput } from "./MonthPickerInput";

const meta = preview.meta({
  title: "Dates/MonthPickerInput",
  component: MonthPickerInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Pick a month",
    placeholder: "Pick a month",
    description: "Select a month from the calendar",
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
    label: "Month input",
    placeholder: "Pick a month",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "2026-01-15",
      },
    },
  },
});
