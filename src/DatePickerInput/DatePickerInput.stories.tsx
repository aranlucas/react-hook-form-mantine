import preview from "../../.storybook/preview";
import { DatePickerInput } from "./DatePickerInput";

const meta = preview.meta({
  title: "Dates/DatePickerInput",
  component: DatePickerInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Pick date",
    placeholder: "Pick date",
    description: "Select a date from the calendar",
    valueFormat: "YYYY-MM-DD",
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
    label: "Date input",
    placeholder: "Pick date",
    valueFormat: "MMMM DD, YYYY",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "2026-01-15",
      },
    },
  },
});
