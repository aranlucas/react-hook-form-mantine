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
    description: "Share your thoughts",
    autosize: true,
    minRows: 3,
    maxRows: 6,
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};

export const WithValidation: Story = {
  args: {
    name: "test",
    placeholder: "Your comment",
    label: "Required comment",
    rules: {
      required: {
        value: true,
        message: "Comment is required",
      },
      minLength: {
        value: 10,
        message: "Comment must be at least 10 characters",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
