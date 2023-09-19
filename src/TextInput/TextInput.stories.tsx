import { type Meta, type StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Your name",
    label: "Full name",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
