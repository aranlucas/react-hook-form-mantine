import preview from "../../.storybook/preview";
import { Checkbox } from "./Checkbox";

const meta = preview.meta({
  title: "Toggles/Checkbox",
  component: Checkbox,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "I agree to sell my privacy",
    description: "You can unsubscribe at any time",
  },
  parameters: {
    form: {
      defaultValues: {
        test: true,
      },
    },
  },
});

export const Required = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "I accept the terms and conditions",
    rules: {
      required: {
        value: true,
        message: "You must accept the terms",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
});
