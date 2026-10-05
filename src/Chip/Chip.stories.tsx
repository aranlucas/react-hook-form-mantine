import preview from "../../.storybook/preview";
import { Chip } from "./Chip";

const meta = preview.meta({
  title: "Toggles/Chip",
  component: Chip,
});

export const Primary = meta.story({
  args: {
    name: "test",
    children: "React",
  },
  parameters: {
    form: {
      defaultValues: {
        test: true,
      },
    },
  },
});

export const Unchecked = meta.story({
  args: {
    name: "test",
    children: "Vue",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
});
