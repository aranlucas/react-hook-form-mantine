import { type Meta, type StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Your comment",
    label: "Your comment",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
