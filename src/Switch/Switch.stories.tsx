import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { Switch } from "./Switch";

export default {
  component: Switch,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

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
