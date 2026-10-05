import preview from "../../.storybook/preview";
import { calendarAriaLabels } from "../../.storybook/a11y";
import { MonthPicker } from "./MonthPicker";

const meta = preview.meta({
  title: "Dates/MonthPicker",
  component: MonthPicker,
  args: {
    ariaLabels: calendarAriaLabels,
  },
});

export const Primary = meta.story({
  args: {
    name: "test",
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
  },
  parameters: {
    form: {
      defaultValues: {
        test: "2026-01-15",
      },
    },
  },
});
