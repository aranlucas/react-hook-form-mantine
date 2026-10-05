import preview from "../../.storybook/preview";
import { calendarAriaLabels } from "../../.storybook/a11y";
import { DatePicker } from "./DatePicker";

const meta = preview.meta({
  title: "Dates/DatePicker",
  component: DatePicker,
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
    defaultDate: "2026-01-01",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "2026-01-15",
      },
    },
  },
});
