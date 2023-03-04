import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { PasswordInput } from "./PasswordInput";

export default {
  component: PasswordInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof PasswordInput>;

type Story = StoryObj<typeof PasswordInput>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Password",
    label: "Password",
    description:
      "Password must include at least one letter, number and special character",
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
