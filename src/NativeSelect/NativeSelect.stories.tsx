import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { NativeSelect } from "./NativeSelect";

export default {
  component: NativeSelect,
  decorators: [withReactHookForm],
} satisfies Meta<typeof NativeSelect>;

type Story = StoryObj<typeof NativeSelect>;

export const Primary: Story = {
  args: {
    name: "test",
    data: [],
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
