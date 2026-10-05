import preview from "../../.storybook/preview";
import { Switch } from "./Switch";

const meta = preview.meta({
  title: "Toggles/Switch",
  component: Switch,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Enable notifications",
    description: "Receive email notifications",
  },
  parameters: {
    form: {
      defaultValues: {
        test: true,
      },
    },
  },
});

export const WithLabel = meta.story({
  args: {
    name: "test",
    label: "Dark mode",
    description: "Use dark theme",
    thumbIcon: "🌙",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
});
