import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { Textarea } from "./Textarea";

export default {
  component: Textarea,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
      onSubmit: (data: any) => {
        console.log(data);
      },
    },
  },
};
