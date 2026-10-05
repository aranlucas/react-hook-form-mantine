import preview from "../../.storybook/preview";
import { Radio } from "./Radio";

const meta = preview.meta({
  title: "Toggles/Radio",
  component: Radio,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Select this option",
    description: "Choose this option",
  },
  parameters: {
    form: {
      defaultValues: {
        test: true,
      },
    },
  },
});
