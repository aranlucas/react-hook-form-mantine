import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { JsonInput } from "./JsonInput";

export default {
  component: JsonInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof JsonInput>;

type Story = StoryObj<typeof JsonInput>;

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
