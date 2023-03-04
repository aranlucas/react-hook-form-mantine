import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";
import { withReactHookForm } from "../stories/decorator";

export default {
  component: Chip,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

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
