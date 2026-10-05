import preview from "../../.storybook/preview";
import { calendarAriaLabels } from "../../.storybook/a11y";
import { InlineDateTimePicker } from "./InlineDateTimePicker";

const meta = preview.meta({
  title: "Dates/InlineDateTimePicker",
  component: InlineDateTimePicker,
  args: {
    ariaLabels: calendarAriaLabels,
    submitButtonProps: { "aria-label": "Confirm date and time" },
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
        test: "2026-01-15 14:30:00",
      },
    },
  },
});
