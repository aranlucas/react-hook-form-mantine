import preview from "../../.storybook/preview";
import { YearPickerInput } from "./YearPickerInput";

const meta = preview.meta({
  title: "Dates/YearPickerInput",
  component: YearPickerInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Pick a year",
    placeholder: "Pick a year",
    description: "Select a year",
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
    label: "Year input",
    placeholder: "Pick a year",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "2026-01-15",
      },
    },
  },
});
