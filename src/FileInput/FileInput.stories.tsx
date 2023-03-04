import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { FileInput } from "./FileInput";

export default {
  component: FileInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof FileInput>;

type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
  args: {
    name: "test",
    children: "Test",
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
