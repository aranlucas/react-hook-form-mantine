import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
