import preview from "../../.storybook/preview";
import { DateTimePicker } from "./DateTimePicker";

const meta = preview.meta({
  title: "Dates/DateTimePicker",
  component: DateTimePicker,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Pick date and time",
    placeholder: "Pick date and time",
    description: "Select date and time",
    valueFormat: "YYYY-MM-DD HH:mm",
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
    label: "Date and time",
    placeholder: "Pick date and time",
    valueFormat: "MMMM DD, YYYY hh:mm A",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "2026-01-15 14:30:00",
      },
    },
  },
});
