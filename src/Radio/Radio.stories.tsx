import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { Radio } from "./Radio";

export default {
  component: Radio,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

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
