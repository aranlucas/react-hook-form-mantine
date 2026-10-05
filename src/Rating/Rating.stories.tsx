import preview from "../../.storybook/preview";
import { Rating } from "./Rating";

const meta = preview.meta({
  title: "Toggles/Rating",
  component: Rating,
});

export const Primary = meta.story({
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: 2,
      },
    },
  },
});

export const FiveStars = meta.story({
  args: {
    name: "test",
    count: 5,
  },
  parameters: {
    form: {
      defaultValues: {
        test: 4,
      },
    },
  },
});
