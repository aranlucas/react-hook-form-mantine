import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  decorators: [withReactHookForm],
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
