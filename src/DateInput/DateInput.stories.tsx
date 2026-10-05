import preview from "../../.storybook/preview";
import { DateInput } from "./DateInput";

const meta = preview.meta({
  title: "Dates/DateInput",
  component: DateInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Pick a date",
    placeholder: "Pick a date",
    description: "Select any date",
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
    placeholder: "Pick a date",
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
