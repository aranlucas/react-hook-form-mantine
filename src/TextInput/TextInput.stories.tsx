import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { TextInput } from "./TextInput";

export default {
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
      onSubmit: (data: any) => {
        console.log(data);
      },
    },
  },
};
