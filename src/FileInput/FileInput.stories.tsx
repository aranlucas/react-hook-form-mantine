import { type Meta, type StoryObj } from "@storybook/react";
import { FileInput } from "./FileInput";

export default {
  title: "Components/FileInput",
  component: FileInput,
} satisfies Meta<typeof FileInput>;

type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Your Resume",
    placeholder: "Pick file",
  },
  parameters: {
    form: {
      defaultValues: {
        test: undefined,
      },
    },
  },
};
